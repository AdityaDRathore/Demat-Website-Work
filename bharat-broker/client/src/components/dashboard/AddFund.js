import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faCopy, faUpload } from '@fortawesome/free-solid-svg-icons';
import '../../styles/AddFund.css';

function AddFund() {
  const [paymentDate, setPaymentDate] = useState('');
  const [amount, setAmount] = useState('');
  const [file, setFile] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    // Add a toast notification here
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="add-fund">
      <h2>Add Fund</h2>
      
      {/* QR Code and Account Details Section */}
      <div className="fund-info">
        <div className="qr-code-section">
          <img src="/path/to/your/qr-code.png" alt="QR Code" className="qr-code" />
          <div className="account-info">
            <div className="info-item">
              <span>Name - Grow capitals</span>
              <FontAwesomeIcon icon={faCopy} onClick={() => handleCopy("Grow capitals")} />
            </div>
            <div className="info-item">
              <span>A/c No. - 500101012461041</span>
              <FontAwesomeIcon icon={faCopy} onClick={() => handleCopy("500101012461041")} />
            </div>
            <div className="info-item">
              <span>IFSC - CIUB0000704</span>
              <FontAwesomeIcon icon={faCopy} onClick={() => handleCopy("CIUB0000704")} />
            </div>
            <div className="info-item">
              <span>UPI ID - muskanjaav7-2@okhdlcbank</span>
              <FontAwesomeIcon icon={faCopy} onClick={() => handleCopy("muskanjaav7-2@okhdlcbank")} />
            </div>
          </div>
        </div>
        
        {/* Total Available Balance Box */}
        <div className="balance-box">
          <FontAwesomeIcon icon={faWallet} />
          <div>
            <p>Total Available Balance</p>
            <p className="balance">Rs. 60,965.00</p>
          </div>
        </div>
      </div>

      {/* Add Funds Form */}
      <div className="add-funds-form">
        <h3>Add Funds</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="paymentDate">Payment Date</label>
            <input
              type="date"
              id="paymentDate"
              value={paymentDate}
              onChange={(e) => setPaymentDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="paymentSlip">Upload Payment Slip</label>
            <div className="file-input-wrapper">
              <input
                type="file"
                id="paymentSlip"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <button type="button" onClick={() => document.getElementById('paymentSlip').click()}>
                <FontAwesomeIcon icon={faUpload} /> Choose File
              </button>
              <span>{file ? file.name : 'No file chosen'}</span>
            </div>
          </div>
          <button type="submit" className="submit-button">Add Fund</button>
        </form>
      </div>

      {/* Previous Funds Table */}
      <div className="previous-funds">
        <h3>Previous Funds</h3>
        <table>
          <thead>
            <tr>
              <th>Payment Date</th>
              <th>Amount</th>
              <th>Slip</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-09-12</td>
              <td>20000</td>
              <td><a href="#">View Slip</a></td>
              <td className="status approved">Approved</td>
              <td><button className="delete-button">Delete</button></td>
            </tr>
            <tr>
              <td>2024-09-12</td>
              <td>10000</td>
              <td><a href="#">View Slip</a></td>
              <td className="status approved">Approved</td>
              <td><button className="delete-button">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddFund;
