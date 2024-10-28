import React, { useState, useEffect } from 'react';
import '../../styles/AvailableFund.css';
import '../../styles/Spinner.css';

function AvailableFund() {
  const [fundData, setFundData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFundData();
  }, []);

  const fetchFundData = async () => {
    try {
      const response = await fetch('/api/funds');
      const data = await response.json();
      setFundData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching fund data:', error);
      setError('Failed to load fund data');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="available-fund">
        <h2>Available Fund</h2>
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  if (error) return <div className="available-fund">{error}</div>;
  if (!fundData) return null;

  return (
    <div className="available-fund">
      <h2>Available Fund</h2>
      <div className="fund-info-card">
        <div className="fund-info-item">
          <span className="fund-info-label">Total Fund</span>
          <span className="fund-info-value">
            {fundData.totalFund ? fundData.totalFund.toFixed(2) : 'N/A'}
          </span>
        </div>
        <div className="fund-info-item">
          <span className="fund-info-label">Used Margin</span>
          <span className="fund-info-value">
            {fundData.usedMargin ? fundData.usedMargin.toFixed(2) : 'N/A'}
          </span>
        </div>
        <div className="fund-info-item">
          <span className="fund-info-label">Available Margin</span>
          <span className="fund-info-value">
            {fundData.availableMargin ? fundData.availableMargin.toFixed(2) : 'N/A'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AvailableFund;
