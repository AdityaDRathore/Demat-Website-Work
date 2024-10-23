import React, { useState } from 'react';
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

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('home');

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
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-layout">
      <Header />
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="dashboard-main">
        <div className="dashboard-content">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
