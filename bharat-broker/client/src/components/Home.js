import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShieldAlt, faHandshake, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div>
      <section className="hero-section">
        <div className="container hero-content">
          <h1>Welcome to Bharat Broker</h1>
          <p>Your trusted partner for innovative investment solutions and expert financial advice.</p>
          <a href="#" className="btn-primary">Get Started</a>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>Why Choose Bharat Broker</h2>
          <div className="features-grid">
            <div className="feature-card">
              <FontAwesomeIcon icon={faChartLine} className="feature-icon" />
              <h3>Expert Analysis</h3>
              <p>Get insights from our team of financial experts.</p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faShieldAlt} className="feature-icon" />
              <h3>Secure Investments</h3>
              <p>Your investments are protected with our security measures.</p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faHandshake} className="feature-icon" />
              <h3>Personalized Service</h3>
              <p>Receive tailored advice from our dedicated team.</p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faMobileAlt} className="feature-icon" />
              <h3>Mobile Trading</h3>
              <p>Trade on-the-go with our user-friendly mobile app.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Stock Trading" />
              <div className="service-card-content">
                <h3>Stock Trading</h3>
                <p>Trade stocks with real-time market data and expert insights.</p>
              </div>
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Mutual Funds" />
              <div className="service-card-content">
                <h3>Mutual Funds</h3>
                <p>Invest in a diverse portfolio of mutual funds tailored to your goals.</p>
              </div>
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Financial Planning" />
              <div className="service-card-content">
                <h3>Financial Planning</h3>
                <p>Get personalized financial advice to achieve your long-term goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
