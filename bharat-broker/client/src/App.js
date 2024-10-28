import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/dashboard/Dashboard';
import './styles/main.css';

// Layout component that includes the Header
const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  // This would typically come from your authentication system
  const isLoggedIn = false; 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/register" element={<Layout><Registration /></Layout>} />
        
        {/* Protected route for authenticated users */}
        <Route 
          path="/dashboard" 
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />} 
        />
        
        {/* Development route that doesn't require authentication */}
        <Route path="/dev-dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
