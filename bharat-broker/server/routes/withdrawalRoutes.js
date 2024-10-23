const express = require('express');
const router = express.Router();

// GET /api/balance
router.get('/balance', (req, res) => {
  // TODO: Implement logic to fetch balance from database
  // For now, we'll return a mock balance
  res.json({ balance: 1000 });
});

// GET /api/withdrawal-requests
router.get('/withdrawal-requests', (req, res) => {
  // TODO: Implement logic to fetch withdrawal requests from database
  // For now, we'll return mock data
  res.json([
    { id: 1, amount: 100, status: 'pending' },
    { id: 2, amount: 200, status: 'approved' }
  ]);
});

module.exports = router;

