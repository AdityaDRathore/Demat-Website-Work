const express = require('express');
const router = express.Router();

// Mock data for demonstration
const mockOrders = [
  { id: 1, stock: 'AAPL', quantity: 10, price: 150.50 },
  { id: 2, stock: 'GOOGL', quantity: 5, price: 2500.75 },
];

router.get('/', (req, res) => {
  // In a real application, you would fetch this data from a database
  const totalProfit = 1000.00; // This would be calculated based on actual order data
  res.json({ orders: mockOrders, totalProfit });
});

module.exports = router;

