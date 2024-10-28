const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  funds: {
    total: { type: Number, default: 0 },
    usedMargin: { type: Number, default: 0 }
  },
  kycStatus: {
    type: String,
    enum: ['Not Approved', 'Approved'],
    default: 'Not Approved'
  }
});

module.exports = mongoose.model('User', UserSchema);
