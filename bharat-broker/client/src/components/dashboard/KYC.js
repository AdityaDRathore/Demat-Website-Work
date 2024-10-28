import React from 'react';

function KYC({ userData }) {
  if (!userData) return <p>No user data available</p>;

  return (
    <div className="personal-info">
      <h2>KYC Information</h2>
      <div>Name: {userData.name}</div>
      <div>Email: {userData.email}</div>
      <div>Phone: {userData.phone}</div>
      <div>Bank Account No: {userData.accountNo}</div>
      <div>IFSC Code: {userData.ifscCode}</div>
      <div>KYC Status: {userData.kycStatus}</div>
    </div>
  );
}

export default KYC;
