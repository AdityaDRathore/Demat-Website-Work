const mongoose = require('mongoose');

const previousFundSchema = new mongoose.Schema({
  paymentDate: {
    type: Date,
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  paymentSlip: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, {
  timestamps: true
});

const fundSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  totalAvailableBalance: {
    type: Number,
    default: 0,
    min: 0
  },
  usedMargin: {
    type: Number,
    default: 0,
    min: 0
  },
  availableMargin: {
    type: Number,
    default: 0,
    min: 0
  },
  previousFunds: [previousFundSchema]
}, {
  timestamps: true
});

// Calculate available margin before saving
fundSchema.pre('save', function(next) {
  this.availableMargin = this.totalAvailableBalance - this.usedMargin;
  next();
});

module.exports = mongoose.model('Fund', fundSchema);

