import React, { useState, useEffect } from 'react';
import '../../styles/AvailableFund.css';

function AvailableFund() {
  const [fundData, setFundData] = useState({
    totalFund: 0,
    usedMargin: 0,
    availableMargin: 0,
  });

  useEffect(() => {
    fetchFundData();
  }, []);

  const fetchFundData = async () => {
    try {
      const response = await fetch('/api/funds');
      const data = await response.json();
      setFundData(data);
    } catch (error) {
      console.error('Error fetching fund data:', error);
    }
  };

  return (
    <div className="available-fund">
      <h2>Available Fund</h2>
      <div className="fund-info-card">
        <div className="fund-info-item">
          <span className="fund-info-label">Total Fund</span>
          <span className="fund-info-value">{fundData.totalFund.toFixed(2)}</span>
        </div>
        <div className="fund-info-item">
          <span className="fund-info-label">Used Margin</span>
          <span className="fund-info-value">{fundData.usedMargin.toFixed(2)}</span>
        </div>
        <div className="fund-info-item">
          <span className="fund-info-label">Available Margin</span>
          <span className="fund-info-value">{fundData.availableMargin.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default AvailableFund;
