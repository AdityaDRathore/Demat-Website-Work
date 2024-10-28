const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/auth');
const fundRoutes = require('./routes/fundRoutes');
const orderRoutes = require('./routes/orderRoutes');
const withdrawalRoutes = require('./routes/withdrawalRoutes');
const kycRoutes = require('./routes/kycRoutes');

const app = express();

// Connect to Database
try {
  connectDB();
  console.log('Database connection established');
} catch (error) {
  console.error('Database connection failed:', error.message);
  // Keep mock data as fallback during development
  const mockData = require('./middleware/mockData');
  app.use(mockData);
  console.log('Falling back to mock data for development');
}

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Increased limit for file uploads

// Basic route for testing
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/funds', fundRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/withdrawals', withdrawalRoutes);
app.use('/api/kyc', kycRoutes);

const PORT = process.env.PORT || 5000;

// Improved error handling for server startup
const startServer = async (port) => {
  try {
    await app.listen(port);
    console.log(`Server running on port ${port}`);
  } catch (error) {
    if (error.code === 'EADDRINUSE') {
      console.log(`Port ${port} is busy, trying ${port + 1}...`);
      await startServer(port + 1);
    } else {
      console.error('Server failed to start:', error);
      process.exit(1);
    }
  }
};

startServer(PORT);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise rejection:', err);
  // Don't exit the process in development
  if (process.env.NODE_ENV === 'production') {
    process.exit(1);
  }
});
