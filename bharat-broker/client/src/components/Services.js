import React from 'react';

function Services() {
  return (
    <div className="services">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Comprehensive financial solutions tailored to your needs</p>
      </section>
      
      <section className="service-list">
        <div className="service-item">
          <h2>Stock Market Investments</h2>
          <p>Expert guidance on building and managing your stock portfolio for optimal returns.</p>
        </div>
        <div className="service-item">
          <h2>Mutual Funds</h2>
          <p>Diversify your investments with our carefully curated selection of mutual funds.</p>
        </div>
        <div className="service-item">
          <h2>Financial Planning</h2>
          <p>Personalized financial strategies to help you achieve your short and long-term goals.</p>
        </div>
        <div className="service-item">
          <h2>Retirement Planning</h2>
          <p>Secure your future with our comprehensive retirement planning services.</p>
        </div>
      </section>
      
      <section className="why-choose-us">
        <h2>Why Choose Groww Capitals?</h2>
        <ul>
          <li>Expert financial advisors</li>
          <li>Cutting-edge investment technology</li>
          <li>Personalized investment strategies</li>
          <li>Transparent fee structure</li>
          <li>Excellent customer support</li>
        </ul>
      </section>
    </div>
  );
}

export default Services;