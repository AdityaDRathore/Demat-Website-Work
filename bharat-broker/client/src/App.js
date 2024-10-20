import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import Footer from './components/Footer';
import Dashboard from './components/dashboard/Dashboard';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dev-dashboard" element={<Dashboard />} />
        <Route path="*" element={
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
