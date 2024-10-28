import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';
import Withdrawal from './Withdrawal';
import StockTicker from './StockTicker';
import IndicesTable from './IndicesTable';
import TopGainersTable from './TopGainersTable';
import Graph from './Graph';
import AddFund from './AddFund';
import AvailableFund from './AvailableFund';
import Orders from './Orders';
import KYCInformation from './KYCInformation';

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('home');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/kyc');
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data', error);
        setError('Failed to load user data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return (
          <>
            <StockTicker />
            <div className="dashboard-grid">
              <IndicesTable />
              <TopGainersTable />
              <Graph title="Nifty 50" />
            </div>
          </>
        );
      case 'add-fund':
        return <AddFund />;
      case 'available-fund':
        return <AvailableFund />;
      case 'orders':
        return <Orders />;
      case 'withdrawal':
        return <Withdrawal />;
      case 'kyc':
        return <KYCInformation />;
      default:
        return null;
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!userData) return null;

  return (
    <div className="dashboard-layout">
      <Header />
      <Sidebar setActiveComponent={setActiveComponent} userData={userData} />
      <div className="dashboard-main">
        <div className="dashboard-content">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
