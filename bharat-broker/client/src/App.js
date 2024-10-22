import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/dashboard/Dashboard';
import './styles/main.css';

// Layout component that includes the Header
const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

function App() {
  // This would typically come from your authentication system
  const isLoggedIn = false; 

  return (
    <Router>
      <Routes>
        {/* Routes with Header */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Route>
        
        {/* Protected route for authenticated users (without Header) */}
        <Route 
          path="/dashboard" 
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />} 
        />
        
        {/* Development route that doesn't require authentication (without Header) */}
        <Route path="/dev-dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
