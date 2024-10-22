import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import StockTicker from './StockTicker';
import IndicesTable from './IndicesTable';
import TopGainersTable from './TopGainersTable';
import Graph from './Graph';
import AddFund from './AddFund';
import AvailableFund from './AvailableFund';
import Orders from './Orders';
import '../../styles/Dashboard.css';

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return (
          <>
            <div className="stock-ticker-wrapper">
              <StockTicker />
            </div>
            <div className="dashboard-content-wrapper">
              <div className="dashboard-grid">
                <div className="left-column">
                  <IndicesTable />
                  <TopGainersTable />
                </div>
                <div className="right-column">
                  <Graph title="NIFTY" />
                  <Graph title="SENSEX" />
                </div>
              </div>
            </div>
          </>
        );
      case 'add-fund':
        return <AddFund />;
      case 'available-fund':
        return <AvailableFund />;
      case 'orders':
        return <Orders />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
