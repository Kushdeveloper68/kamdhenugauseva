const htmlPdf = require('html-pdf-node');

async function generateReceiptPDF({ receiptNo, date, paymentId, orderId, amount, donorInfo }) {
  const {
    GAUSHALA_NAME,
    GAUSHALA_REG_NO,
    GAUSHALA_80G_NO,
    GAUSHALA_PAN,
    GAUSHALA_ADDRESS,
    GAUSHALA_PHONE,
    GAUSHALA_EMAIL,
  } = process.env;

  const donationType = donorInfo.donationType === 'monthly' ? 'Monthly Donation' : 'One-Time Donation';
  const panLine = donorInfo.pan
    ? `<tr><td class="label">Donor PAN</td><td class="value">${donorInfo.pan}</td></tr>`
    : '';
  const messageLine = donorInfo.message
    ? `<tr><td class="label">Dedication / Note</td><td class="value">${donorInfo.message}</td></tr>`
    : '';

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: Arial, sans-serif;
      color: #212121;
      background: #fff;
      padding: 40px;
    }

    /* ── Header ── */
    .header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      border-bottom: 4px solid #2E7D32;
      padding-bottom: 20px;
      margin-bottom: 24px;
    }
    .org-name {
      font-size: 22px;
      font-weight: 700;
      color: #1B5E20;
      margin-bottom: 4px;
    }
    .org-sub {
      font-size: 12px;
      color: #555;
      line-height: 1.6;
    }
    .receipt-badge {
      text-align: right;
    }
    .receipt-badge .label {
      font-size: 11px;
      color: #888;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .receipt-badge .number {
      font-size: 18px;
      font-weight: 700;
      color: #2E7D32;
    }
    .receipt-badge .date {
      font-size: 12px;
      color: #555;
      margin-top: 4px;
    }

    /* ── 80G Banner ── */
    .banner-80g {
      background: #E8F5E9;
      border-left: 5px solid #2E7D32;
      padding: 12px 16px;
      margin-bottom: 24px;
      border-radius: 4px;
    }
    .banner-80g p {
      font-size: 12px;
      color: #1B5E20;
      font-weight: 600;
    }
    .banner-80g span {
      font-weight: 400;
      color: #424242;
    }

    /* ── Amount block ── */
    .amount-block {
      background: #1B5E20;
      color: #fff;
      padding: 20px 24px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 28px;
    }
    .amount-label {
      font-size: 13px;
      opacity: 0.8;
      margin-bottom: 4px;
    }
    .amount-value {
      font-size: 36px;
      font-weight: 700;
    }
    .amount-type {
      font-size: 12px;
      background: rgba(255,255,255,0.15);
      padding: 4px 10px;
      border-radius: 20px;
    }

    /* ── Details table ── */
    .section-title {
      font-size: 11px;
      font-weight: 700;
      color: #2E7D32;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }
    table.details {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
    }
    table.details td {
      padding: 10px 12px;
      font-size: 13px;
      border-bottom: 1px solid #f0f0f0;
    }
    table.details td.label {
      width: 35%;
      color: #757575;
      font-weight: 600;
    }
    table.details td.value {
      color: #212121;
    }
    table.details tr:last-child td {
      border-bottom: none;
    }
    .details-box {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 24px;
    }

    /* ── Certification ── */
    .certification {
      border: 1px dashed #2E7D32;
      border-radius: 8px;
      padding: 16px 20px;
      margin-bottom: 24px;
      background: #f9fdf9;
    }
    .certification p {
      font-size: 12px;
      color: #424242;
      line-height: 1.7;
    }
    .certification strong {
      color: #1B5E20;
    }

    /* ── Footer ── */
    .footer {
      border-top: 2px solid #E8F5E9;
      padding-top: 16px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .footer-left p {
      font-size: 11px;
      color: #757575;
      line-height: 1.7;
    }
    .signature-area {
      text-align: center;
    }
    .signature-line {
      width: 160px;
      border-bottom: 1px solid #bbb;
      margin-bottom: 4px;
    }
    .signature-label {
      font-size: 10px;
      color: #888;
    }

    /* ── Thank you strip ── */
    .thankyou {
      text-align: center;
      margin-bottom: 20px;
      padding: 10px;
      background: #F1F8E9;
      border-radius: 6px;
    }
    .thankyou p {
      font-size: 13px;
      color: #2E7D32;
      font-weight: 600;
    }
    .thankyou span {
      font-size: 11px;
      color: #555;
      font-weight: 400;
    }
  </style>
</head>
<body>

  <!-- Header -->
  <div class="header">
    <div>
      <div class="org-name">🐄 ${GAUSHALA_NAME || 'Kaam Denu Gaushala Trust'}</div>
      <div class="org-sub">
        Reg. No: ${GAUSHALA_REG_NO || '—'} &nbsp;|&nbsp; PAN: ${GAUSHALA_PAN || '—'}<br/>
        ${GAUSHALA_ADDRESS || ''}<br/>
        ${GAUSHALA_PHONE || ''} &nbsp;|&nbsp; ${GAUSHALA_EMAIL || ''}
      </div>
    </div>
    <div class="receipt-badge">
      <div class="label">Donation Receipt</div>
      <div class="number">${receiptNo}</div>
      <div class="date">${date}</div>
    </div>
  </div>

  <!-- 80G Banner -->
  <div class="banner-80g">
    <p>
      80G Tax Exemption Certificate &nbsp;|&nbsp;
      <span>Certificate No: ${GAUSHALA_80G_NO || '—'}</span>
    </p>
    <p style="margin-top:4px; font-weight:400;">
      <span>Donations are eligible for deduction under Section 80G of the Income Tax Act, 1961.</span>
    </p>
  </div>

  <!-- Thank you -->
  <div class="thankyou">
    <p>Thank you for your generous donation! 🙏</p>
    <span>Your support helps us rescue, rehabilitate and provide sanctuary for cows in need.</span>
  </div>

  <!-- Amount -->
  <div class="amount-block">
    <div>
      <div class="amount-label">Donation Amount Received</div>
      <div class="amount-value">₹${Number(amount).toLocaleString('en-IN')}</div>
    </div>
    <div class="amount-type">${donationType}</div>
  </div>

  <!-- Donor Details -->
  <div class="section-title">Donor Information</div>
  <div class="details-box">
    <table class="details">
      <tr>
        <td class="label">Donor Name</td>
        <td class="value">${donorInfo.name}</td>
      </tr>
      <tr>
        <td class="label">Email Address</td>
        <td class="value">${donorInfo.email}</td>
      </tr>
      ${panLine}
      ${messageLine}
    </table>
  </div>

  <!-- Payment Details -->
  <div class="section-title">Payment Information</div>
  <div class="details-box">
    <table class="details">
      <tr>
        <td class="label">Payment ID</td>
        <td class="value" style="font-family: monospace; font-size: 12px;">${paymentId}</td>
      </tr>
      <tr>
        <td class="label">Order ID</td>
        <td class="value" style="font-family: monospace; font-size: 12px;">${orderId}</td>
      </tr>
      <tr>
        <td class="label">Payment Mode</td>
        <td class="value">Online (Razorpay)</td>
      </tr>
      <tr>
        <td class="label">Date & Time</td>
        <td class="value">${new Date().toLocaleString('en-IN')}</td>
      </tr>
      <tr>
        <td class="label">Status</td>
        <td class="value" style="color: #2E7D32; font-weight: 700;">✓ Payment Successful</td>
      </tr>
    </table>
  </div>

  <!-- Certification -->
  <div class="certification">
    <p>
      Certified that <strong>${donorInfo.name}</strong> has made a donation of 
      <strong>₹${Number(amount).toLocaleString('en-IN')}</strong> to 
      <strong>${GAUSHALA_NAME || 'Kaam Denu Gaushala Trust'}</strong> on <strong>${date}</strong>.
      This donation is eligible for deduction under <strong>Section 80G</strong> of the Income Tax Act, 1961.
      Please retain this receipt for your tax records.
    </p>
  </div>

  <!-- Footer -->
  <div class="footer">
    <div class="footer-left">
      <p>
        ${GAUSHALA_NAME || 'Kaam Denu Gaushala Trust'}<br/>
        This is a computer-generated receipt and does not require a physical signature.<br/>
        For queries: ${GAUSHALA_EMAIL || 'care@kaamdenugaushala.org'}
      </p>
    </div>
    <div class="signature-area">
      <div class="signature-line"></div>
      <div class="signature-label">Authorized Signatory</div>
    </div>
  </div>

</body>
</html>`;

  const file = { content: html };
  const options = {
    format: 'A4',
    margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' },
    printBackground: true,
  };

  const pdfBuffer = await htmlPdf.generatePdf(file, options);
  return pdfBuffer;
}

module.exports = { generateReceiptPDF };