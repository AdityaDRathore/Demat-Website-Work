const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// @route   GET api/funds
// @desc    Get user's fund information
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    // For development, you might want to return mock data
    res.json({
      totalFund: 10000,
      usedMargin: 5000,
      availableMargin: 5000
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/funds/add
// @desc    Add funds to user's account
// @access  Private
router.post('/add', auth, async (req, res) => {
  try {
    const { amount } = req.body;
    if (!amount || amount <= 0) {
      return res.status(400).json({ msg: 'Invalid amount' });
    }

    const user = await User.findById(req.user.id);
    user.funds.total += amount;
    await user.save();

    res.json({
      totalFund: user.funds.total,
      usedMargin: user.funds.usedMargin,
      availableMargin: user.funds.total - user.funds.usedMargin
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
