require('dotenv').config();
const express = require('express');
const cors = require('cors');

const donationRoutes = require('./routes/donation');
const webhookRoutes = require('./routes/webhook');

const app = express();
const PORT = process.env.PORT || 3000;

// ── CORS ──────────────────────────────────────────────────
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    'https://*.vercel.app',  // allow all vercel preview deployments
  ],
  methods: ['GET', 'POST'],
  credentials: true,
}));

// ── Webhook route MUST use raw body for HMAC verification ──
// Register BEFORE express.json()
app.use('/api/webhook', express.raw({ type: 'application/json' }), webhookRoutes);

// ── JSON body parser for all other routes ──────────────────
app.use(express.json());

// ── Routes ─────────────────────────────────────────────────
app.use('/api/donation', donationRoutes);

// ── Health check ───────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── 404 handler ────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ── Global error handler ───────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`✅ Kaam Denu backend running on port ${PORT}`);
});