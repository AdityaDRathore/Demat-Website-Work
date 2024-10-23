import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import WithdrawalModal from './WithdrawalModal';

function WithdrawalTable({ requests, loading }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const openModal = (request) => {
    setSelectedRequest(request);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedRequest(null);
  };

  if (loading) {
    return (
      <div className="loading-spinner">
        <FontAwesomeIcon icon={faSpinner} spin />
      </div>
    );
  }

  return (
    <div className="withdrawal-table">
      <h2>Previous Withdrawal Requests</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Request Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={request.id}>
              <td>{index + 1}</td>
              <td>{new Date(request.requestDate).toLocaleString()}</td>
              <td>{request.amount.toFixed(2)}</td>
              <td>
                <span className={`status-${request.status.toLowerCase()}`}>
                  {request.status}
                </span>
              </td>
              <td>
                <button onClick={() => openModal(request)} className="description-btn">
                  <FontAwesomeIcon icon={faInfoCircle} /> Description
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen && (
        <WithdrawalModal request={selectedRequest} onClose={closeModal} />
      )}
    </div>
  );
}

export default WithdrawalTable;
