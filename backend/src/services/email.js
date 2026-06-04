const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendReceiptEmail({ donorName, donorEmail, amount, receiptNo, date, pdfBuffer }) {
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'receipts@kaamdenugaushala.org';
  const fromName = process.env.RESEND_FROM_NAME || 'Kaam Denu Gaushala';
  const gaushalaName = process.env.GAUSHALA_NAME || 'Kaam Denu Gaushala Trust';

  const formattedAmount = Number(amount).toLocaleString('en-IN');

  const emailHtml = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/></head>
<body style="font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px;">
  <div style="max-width: 560px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
    
    <!-- Header -->
    <div style="background: #1B5E20; padding: 32px 32px 24px; text-align: center;">
      <div style="font-size: 32px; margin-bottom: 8px;">🐄</div>
      <h1 style="color: #fff; font-size: 22px; margin: 0 0 4px;">${gaushalaName}</h1>
      <p style="color: #A5D6A7; font-size: 13px; margin: 0;">Compassionate care for every soul</p>
    </div>

    <!-- Body -->
    <div style="padding: 32px;">
      <h2 style="color: #1B5E20; font-size: 20px; margin: 0 0 8px;">
        Thank you, ${donorName}! 🙏
      </h2>
      <p style="color: #555; font-size: 14px; line-height: 1.6; margin: 0 0 24px;">
        Your generous donation of <strong style="color: #1B5E20;">₹${formattedAmount}</strong> has been 
        received successfully. Your contribution directly funds medical care, quality fodder, and rescue 
        operations for cows in need.
      </p>

      <!-- Amount card -->
      <div style="background: #E8F5E9; border-radius: 8px; padding: 20px; margin-bottom: 24px; text-align: center;">
        <p style="color: #555; font-size: 12px; margin: 0 0 4px; text-transform: uppercase; letter-spacing: 1px;">Amount Donated</p>
        <p style="color: #1B5E20; font-size: 32px; font-weight: 700; margin: 0;">₹${formattedAmount}</p>
        <p style="color: #888; font-size: 12px; margin: 4px 0 0;">${date} &nbsp;|&nbsp; Receipt: ${receiptNo}</p>
      </div>

      <!-- 80G note -->
      <div style="border: 1px solid #C8E6C9; border-radius: 8px; padding: 16px; margin-bottom: 24px; background: #F9FBF9;">
        <p style="color: #2E7D32; font-size: 13px; font-weight: 700; margin: 0 0 4px;">
          📄 80G Tax Exemption
        </p>
        <p style="color: #555; font-size: 13px; margin: 0; line-height: 1.6;">
          Your donation is eligible for tax deduction under <strong>Section 80G</strong> of the 
          Income Tax Act, 1961. Please find your official 80G receipt attached to this email.
          Keep it for your tax records.
        </p>
      </div>

      <p style="color: #555; font-size: 13px; line-height: 1.6; margin: 0 0 8px;">
        With your support, we continue to rescue, rehabilitate, and provide a loving sanctuary 
        for every gentle soul that comes to us. You are making a real difference. 🌿
      </p>
    </div>

    <!-- Footer -->
    <div style="background: #F5F5F5; padding: 20px 32px; border-top: 1px solid #eee;">
      <p style="color: #888; font-size: 12px; margin: 0; text-align: center; line-height: 1.7;">
        ${gaushalaName}<br/>
        Questions? Contact us at 
        <a href="mailto:${process.env.GAUSHALA_EMAIL || 'care@kaamdenugaushala.org'}" 
           style="color: #2E7D32;">${process.env.GAUSHALA_EMAIL || 'care@kaamdenugaushala.org'}</a>
        &nbsp;|&nbsp; ${process.env.GAUSHALA_PHONE || '+91 98765 43210'}
      </p>
    </div>

  </div>
</body>
</html>`;

  await resend.emails.send({
    from: `${fromName} <${fromEmail}>`,
    to: donorEmail,
    subject: `Donation Receipt ${receiptNo} — ${gaushalaName}`,
    html: emailHtml,
    attachments: [
      {
        filename: `Receipt_${receiptNo}.pdf`,
        content: pdfBuffer.toString('base64'),
      },
    ],
  });
}

module.exports = { sendReceiptEmail };