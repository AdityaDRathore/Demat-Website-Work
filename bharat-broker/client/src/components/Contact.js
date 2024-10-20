import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-section">
      <div className="container">
        <div className="breadcrumb">
          <span>Home</span> / <span>Contact Us</span>
        </div>
        
        <h2>Let's get in touch with us</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>info@growwcapitals.com</p>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p>123 Financial Street, New York, NY 10001</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn-primary">Contact Us Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
