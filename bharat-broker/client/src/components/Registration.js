import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUser, faFileUpload, faIdCard, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/ Registration.css';

function Registration() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    photo: null,
    panCard: null,
    aadharCard: null,
    signature: null,
    accountNo: '',
    ifscCode: '',
    bankName: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const validateStep = () => {
    let stepErrors = {};
    switch (step) {
      case 1:
        if (!formData.fullName) stepErrors.fullName = 'Full Name is required';
        if (!formData.email) stepErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) stepErrors.email = 'Email is invalid';
        if (!formData.phoneNumber) stepErrors.phoneNumber = 'Phone Number is required';
        else if (!/^\d{10}$/.test(formData.phoneNumber)) stepErrors.phoneNumber = 'Phone Number is invalid';
        break;
      case 2:
        if (!formData.photo) stepErrors.photo = 'Photo is required';
        if (!formData.panCard) stepErrors.panCard = 'PAN Card is required';
        if (!formData.aadharCard) stepErrors.aadharCard = 'Aadhar Card is required';
        if (!formData.signature) stepErrors.signature = 'Signature is required';
        break;
      case 3:
        if (!formData.accountNo) stepErrors.accountNo = 'Account Number is required';
        if (!formData.ifscCode) stepErrors.ifscCode = 'IFSC Code is required';
        if (!formData.bankName) stepErrors.bankName = 'Bank Name is required';
        break;
      default:
        break;
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(prevStep => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      // Reset form or redirect user after successful submission
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="error-message">{errors.fullName}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="form-group">
              <label htmlFor="photo">Photo</label>
              <input
                type="file"
                id="photo"
                name="photo"
                onChange={handleChange}
                accept="image/*"
              />
              {errors.photo && <p className="error-message">{errors.photo}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="panCard">PAN Card</label>
              <input
                type="file"
                id="panCard"
                name="panCard"
                onChange={handleChange}
                accept="image/*,.pdf"
              />
              {errors.panCard && <p className="error-message">{errors.panCard}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="aadharCard">Aadhar Card</label>
              <input
                type="file"
                id="aadharCard"
                name="aadharCard"
                onChange={handleChange}
                accept="image/*,.pdf"
              />
              {errors.aadharCard && <p className="error-message">{errors.aadharCard}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="signature">Signature</label>
              <input
                type="file"
                id="signature"
                name="signature"
                onChange={handleChange}
                accept="image/*"
              />
              {errors.signature && <p className="error-message">{errors.signature}</p>}
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="form-group">
              <label htmlFor="accountNo">Account Number</label>
              <input
                type="text"
                id="accountNo"
                name="accountNo"
                value={formData.accountNo}
                onChange={handleChange}
              />
              {errors.accountNo && <p className="error-message">{errors.accountNo}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="ifscCode">IFSC Code</label>
              <input
                type="text"
                id="ifscCode"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleChange}
              />
              {errors.ifscCode && <p className="error-message">{errors.ifscCode}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="bankName">Bank Name</label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
              />
              {errors.bankName && <p className="error-message">{errors.bankName}</p>}
            </div>
          </>
        );
      case 4:
        return (
          <div>
            <h3>Summary</h3>
            <p>Full Name: {formData.fullName}</p>
            <p>Email: {formData.email}</p>
            <p>Phone Number: {formData.phoneNumber}</p>
            <p>Photo: {formData.photo ? formData.photo.name : 'Not uploaded'}</p>
            <p>PAN Card: {formData.panCard ? formData.panCard.name : 'Not uploaded'}</p>
            <p>Aadhar Card: {formData.aadharCard ? formData.aadharCard.name : 'Not uploaded'}</p>
            <p>Signature: {formData.signature ? formData.signature.name : 'Not uploaded'}</p>
            <p>Account Number: {formData.accountNo}</p>
            <p>IFSC Code: {formData.ifscCode}</p>
            <p>Bank Name: {formData.bankName}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="registration-container">
      <div className="left-section">
        <div>
          <img src="/path-to-your-logo.png" alt="Logo" />
          <h2>Welcome to Bharat Broker</h2>
          <p>Your trusted partner for innovative investment solutions.</p>
        </div>
        <img src="/path-to-your-illustration.png" alt="Illustration" />
        <div className="stats">
          <div className="stat-item">
            <FontAwesomeIcon icon={faChartLine} size="2x" />
            <p>$1M+ Traded</p>
          </div>
          <div className="stat-item">
            <FontAwesomeIcon icon={faUser} size="2x" />
            <p>10k+ Users</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="form-container">
          <h2>Registration</h2>
          <div className="step-indicator">
            <div className={`step ${step >= 1 ? 'active' : ''}`}><FontAwesomeIcon icon={faUser} /></div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}><FontAwesomeIcon icon={faFileUpload} /></div>
            <div className={`step ${step >= 3 ? 'active' : ''}`}><FontAwesomeIcon icon={faIdCard} /></div>
            <div className={`step ${step >= 4 ? 'active' : ''}`}><FontAwesomeIcon icon={faCheckCircle} /></div>
          </div>
          <form onSubmit={handleSubmit}>
            {renderStepContent()}
            <div className="button-group">
              {step > 1 && (
                <button type="button" onClick={handlePrevious}>
                  Previous
                </button>
              )}
              {step < 4 ? (
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              ) : (
                <button type="submit">
                  Submit
                </button>
              )}
            </div>
          </form>
          <Link to="/login">Already have an account? Sign in</Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;
