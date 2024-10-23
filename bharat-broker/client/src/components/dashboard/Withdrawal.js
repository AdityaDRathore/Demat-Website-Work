import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import WithdrawalForm from './WithdrawalForm';
import WithdrawalTable from './WithdrawalTable';
import '../../styles/Withdrawal.css';

function Withdrawal() {
  const [balance, setBalance] = useState(0);
  const [withdrawalRequests, setWithdrawalRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBalance();
    fetchWithdrawalRequests();
  }, []);

  const fetchBalance = async () => {
    try {
      const response = await axios.get('/api/balance');
      setBalance(response.data.balance);
    } catch (error) {
      console.error('Error fetching balance:', error);
      toast.error('Failed to fetch balance');
    }
  };

  const fetchWithdrawalRequests = async () => {
    try {
      const response = await axios.get('/api/withdrawal-requests');
      setWithdrawalRequests(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching withdrawal requests:', error);
      toast.error('Failed to fetch withdrawal requests');
      setLoading(false);
    }
  };

  const handleWithdrawalSubmit = async (amount) => {
    try {
      setLoading(true);
      await axios.post('/api/withdrawal-requests', { amount });
      toast.success('Withdrawal request submitted successfully');
      fetchBalance();
      fetchWithdrawalRequests();
    } catch (error) {
      console.error('Error submitting withdrawal request:', error);
      toast.error('Failed to submit withdrawal request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="withdrawal-container">
      <h1>Request Withdrawal</h1>
      <WithdrawalForm 
        balance={balance} 
        onSubmit={handleWithdrawalSubmit} 
        loading={loading}
      />
      <WithdrawalTable 
        requests={withdrawalRequests} 
        loading={loading}
      />
    </div>
  );
}

export default Withdrawal;

