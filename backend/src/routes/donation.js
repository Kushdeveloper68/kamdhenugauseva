const express = require('express');
const router = express.Router();
const { createOrder, verifyAndProcess } = require('../services/razorpay');

// ── POST /api/donation/create-order ───────────────────────
// Frontend calls this first to get a Razorpay order_id
router.post('/create-order', async (req, res) => {
  try {
    const { amount, name, email, pan, message, donationType } = req.body;

    // Basic validation
    if (!amount || isNaN(amount) || Number(amount) < 1) {
      return res.status(400).json({ error: 'Invalid amount' });
    }
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }
    if (!name || name.trim().length < 2) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const order = await createOrder({
      amount: Number(amount),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      pan: pan ? pan.trim().toUpperCase() : '',
      message: message || '',
      donationType: donationType || 'one-time',
    });

    res.json({
      order_id: order.id,
      amount: order.amount,        // in paise
      currency: order.currency,
      key_id: process.env.RAZORPAY_KEY_ID,
    });

  } catch (err) {
    console.error('Create order error:', err);
    res.status(500).json({ error: 'Failed to create payment order' });
  }
});

// ── POST /api/donation/verify ──────────────────────────────
// Frontend calls this after Razorpay checkout succeeds
// Verifies signature → generates PDF → sends email
router.post('/verify', async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      // donor info echoed back from frontend
      name,
      email,
      pan,
      amount,
      donationType,
      message,
    } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ error: 'Missing payment verification fields' });
    }

    const result = await verifyAndProcess({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      donorInfo: { name, email, pan, amount, donationType, message },
    });

    res.json({ success: true, receiptNo: result.receiptNo });

  } catch (err) {
    console.error('Verify payment error:', err);

    if (err.message === 'SIGNATURE_INVALID') {
      return res.status(400).json({ error: 'Payment verification failed. Please contact support.' });
    }

    res.status(500).json({ error: 'Payment verified but receipt failed. Please contact us.' });
  }
});

module.exports = router;