// server/middleware/mockData.js
module.exports = function(req, res, next) {
  if (req.path === '/api/kyc') {
    return res.json({
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      accountNo: '123456789012',
      ifscCode: 'IFSC0001234',
      kycStatus: 'Not Approved'
    });
  }
  next();
};

