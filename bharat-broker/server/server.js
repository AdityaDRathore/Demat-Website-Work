const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const fundRoutes = require('./routes/fundRoutes');
const orderRoutes = require('./routes/orderRoutes');
const withdrawalRoutes = require('./routes/withdrawalRoutes');
const kycRoutes = require('./routes/kycRoutes');
const mockData = require('./middleware/mockData');

console.log('Database connection bypassed for development');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(mockData);

// Routes
// Uncomment these when you have implemented these routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/users', require('./routes/api'));

// Basic route for testing
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.use('/api/funds', fundRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api', withdrawalRoutes);
app.use('/api/kyc', kycRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}).on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} is busy, trying ${PORT + 1}...`);
    app.listen(PORT + 1);
  } else {
    console.error(e);
  }
});
