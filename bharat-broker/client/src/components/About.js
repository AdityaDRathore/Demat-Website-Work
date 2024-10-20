import React from 'react';

function About() {
  return (
    <div className="about-section">
      <div className="container">
        <div className="breadcrumb">
          <span>Home</span> / <span>About</span>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            {/* Add your company image here */}
            <img src="/path/to/your/image.jpg" alt="Bharat Broker Team" />
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <h3>Years of</h3>
              <p>Consulting Experience</p>
            </div>
            <div className="stat-item">
              <h3>1k+</h3>
              <p>Satisfied Customers</p>
            </div>
          </div>
        </div>
        
        <div className="about-description">
          <h2>Meet our company and seize the opportunity</h2>
          <p>
            Welcome to Bharat Broker! We're thrilled you're here to learn about our company. 
            Don't miss this chance to discover how we're revolutionizing the world of investments. 
            Our team is dedicated to creating innovative financial solutions and providing 
            exceptional services to our clients. From the first consultation to the final 
            investment, we're committed to delivering results that surpass your expectations.
          </p>
          <button className="btn-primary">Explore More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
