import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import '../../styles/KYCInformation.css';

function KYCInformation() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const response = await axios.get('/api/kyc');
        setUserData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load user data');
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!userData) return null;

  const getStatusClass = (status) => {
    return status.toLowerCase() === 'approved' ? 'status-approved' : 'status-not-approved';
  };

  return (
    <div className="kyc-information">
      <h2>KYC Information</h2>
      <button className="edit-button">
        <FontAwesomeIcon icon={faPencilAlt} /> Edit
      </button>
      <div className="info-grid">
        <div className="info-item">
          <label>Name</label>
          <input type="text" value={userData.name} disabled />
        </div>
        <div className="info-item">
          <label>Email</label>
          <input type="email" value={userData.email} disabled />
        </div>
        <div className="info-item">
          <label>Bank Account No.</label>
          <input type="text" value={userData.accountNo} disabled />
        </div>
        <div className="info-item">
          <label>Phone</label>
          <input type="tel" value={userData.phone} disabled />
        </div>
        <div className="info-item">
          <label>IFSC Code</label>
          <input type="text" value={userData.ifscCode} disabled />
        </div>
        <div className="info-item">
          <label>KYC Status</label>
          <input 
            type="text" 
            value={userData.kycStatus} 
            disabled 
            className={getStatusClass(userData.kycStatus)}
          />
        </div>
      </div>
    </div>
  );
}

export default KYCInformation;
