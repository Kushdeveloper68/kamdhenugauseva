const Razorpay = require('razorpay');
const crypto = require('crypto');
const { generateReceiptPDF } = require('./pdf');
const { sendReceiptEmail } = require('./email');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Track processed payments to avoid duplicate receipts
// In production you'd use a database — for now in-memory Set is fine
// (Render restarts clear it, but webhook + verify together prevent most duplicates)
const processedPayments = new Set();

// ── Generate a unique receipt number ──────────────────────
function generateReceiptNo() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const random = Math.floor(Math.random() * 9000) + 1000;
  return `KDG-${year}${month}-${random}`;
}

// ── Create Razorpay order ──────────────────────────────────
async function createOrder({ amount, name, email, pan, message, donationType }) {
  const receiptNo = generateReceiptNo();

  const order = await razorpay.orders.create({
    amount: Math.round(amount * 100), // convert to paise
    currency: 'INR',
    receipt: receiptNo,
    notes: {
      // Store donor info in notes — Razorpay passes this back in webhook
      name,
      email,
      pan,
      message,
      donationType,
      receiptNo,
    },
  });

  return order;
}

// ── Verify Razorpay signature ──────────────────────────────
function verifySignature({ razorpay_order_id, razorpay_payment_id, razorpay_signature }) {
  const body = razorpay_order_id + '|' + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest('hex');

  return expectedSignature === razorpay_signature;
}

// ── Process successful payment (generate PDF + send email) ─
async function processSuccessfulPayment({ paymentId, orderId, amount, donorInfo, source = 'verify' }) {
  // Prevent duplicate processing
  if (processedPayments.has(paymentId)) {
    console.log(`Payment ${paymentId} already processed — skipping`);
    return { receiptNo: 'already-processed' };
  }
  processedPayments.add(paymentId);

  const receiptNo = generateReceiptNo();
  const date = new Date().toLocaleDateString('en-IN', {
    day: '2-digit', month: 'long', year: 'numeric'
  });

  try {
    // 1. Generate 80G PDF receipt
    const pdfBuffer = await generateReceiptPDF({
      receiptNo,
      date,
      paymentId,
      orderId,
      amount,
      donorInfo,
    });

    // 2. Send email with PDF attachment
    await sendReceiptEmail({
      donorName: donorInfo.name,
      donorEmail: donorInfo.email,
      amount,
      receiptNo,
      date,
      pdfBuffer,
    });

    console.log(`✅ Receipt sent: ${receiptNo} → ${donorInfo.email} (via ${source})`);
    return { receiptNo };

  } catch (err) {
    // Remove from processed set so webhook retry can attempt again
    processedPayments.delete(paymentId);
    throw err;
  }
}

// ── Verify + Process (called from /verify route) ───────────
async function verifyAndProcess({ razorpay_order_id, razorpay_payment_id, razorpay_signature, donorInfo }) {
  // 1. Verify signature
  const isValid = verifySignature({ razorpay_order_id, razorpay_payment_id, razorpay_signature });

  if (!isValid) {
    throw new Error('SIGNATURE_INVALID');
  }

  // 2. Fetch payment details from Razorpay to get actual amount
  const payment = await razorpay.payments.fetch(razorpay_payment_id);
  const amount = payment.amount / 100; // paise to rupees

  // 3. Process — generate PDF and send email
  return await processSuccessfulPayment({
    paymentId: razorpay_payment_id,
    orderId: razorpay_order_id,
    amount,
    donorInfo,
    source: 'verify',
  });
}

module.exports = { createOrder, verifyAndProcess, processSuccessfulPayment };