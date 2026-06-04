const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const { processSuccessfulPayment } = require('../services/razorpay');

// ── POST /api/webhook ──────────────────────────────────────
// Razorpay calls this directly after payment events
// This is a BACKUP — primary flow is /api/donation/verify
// Handles edge cases: user closed browser after paying, network timeout etc.

router.post('/', async (req, res) => {
  try {
    const signature = req.headers['x-razorpay-signature'];
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (!signature || !secret) {
      console.error('Webhook: missing signature or secret');
      return res.status(400).json({ error: 'Missing signature' });
    }

    // Verify HMAC — MUST use raw body (set up in index.js)
    const rawBody = req.body; // Buffer because of express.raw()
    const expectedSig = crypto
      .createHmac('sha256', secret)
      .update(rawBody)
      .digest('hex');

    if (expectedSig !== signature) {
      console.error('Webhook: signature mismatch');
      return res.status(400).json({ error: 'Invalid signature' });
    }

    // Parse the raw body now that we've verified it
    const event = JSON.parse(rawBody.toString());
    console.log('Webhook event received:', event.event);

    // Handle payment.captured event
    if (event.event === 'payment.captured') {
      const payment = event.payload.payment.entity;

      // Check if receipt was already sent via /verify route
      // Razorpay notes field carries donor info we stored in create-order
      const notes = payment.notes || {};

      // Only process if notes have email (means it came from our flow)
      if (notes.email) {
        try {
          await processSuccessfulPayment({
            paymentId: payment.id,
            orderId: payment.order_id,
            amount: payment.amount / 100, // convert paise to rupees
            donorInfo: {
              name: notes.name || 'Donor',
              email: notes.email,
              pan: notes.pan || '',
              donationType: notes.donationType || 'one-time',
              message: notes.message || '',
            },
            source: 'webhook',
          });
        } catch (processErr) {
          // Log but still return 200 to Razorpay
          // Otherwise Razorpay retries 3 times
          console.error('Webhook: processPayment failed:', processErr.message);
        }
      }
    }

    // ALWAYS return 200 to Razorpay — even on errors
    res.status(200).json({ received: true });

  } catch (err) {
    console.error('Webhook handler error:', err);
    // Still return 200 so Razorpay doesn't retry indefinitely
    res.status(200).json({ received: true });
  }
});

module.exports = router;