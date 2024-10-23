import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function WithdrawalModal({ request, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2>Withdrawal Request Details</h2>
        <p><strong>Request Number:</strong> {request.id}</p>
        <p><strong>Date:</strong> {new Date(request.requestDate).toLocaleString()}</p>
        <p><strong>Amount:</strong> {request.amount.toFixed(2)}</p>
        <p><strong>Status:</strong> {request.status}</p>
        <p><strong>Description:</strong> {request.description}</p>
      </div>
    </div>
  );
}

export default WithdrawalModal;
