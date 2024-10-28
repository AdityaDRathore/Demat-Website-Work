const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// Get KYC details
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('name email phone accountNo ifscCode kycStatus');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update KYC status
router.put('/kyc/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.kycStatus = req.body.kycStatus;
    await user.save();
    res.json({ msg: 'KYC status updated' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
