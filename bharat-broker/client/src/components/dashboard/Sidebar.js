import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faDollarSign, faClipboardList, faMoneyBillTransfer, faIdCard, faHeadset, faBars } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ setActiveComponent }) {
  const [activeItem, setActiveItem] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setActiveComponent(item);
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={`dashboard-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          {/* Add your logo here */}
          <img src="/path/to/your/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="sidebar-nav">
          <ul>
            <li 
              onClick={() => handleItemClick('home')} 
              className={activeItem === 'home' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faHome} /> Home
            </li>
            <li
              onClick={() => handleItemClick('add-fund')}
              className={activeItem === 'add-fund' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faPlus} /> Add fund
            </li>
            <li 
              onClick={() => handleItemClick('available-fund')} 
              className={activeItem === 'available-fund' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faDollarSign} /> Available Fund
            </li>
            <li 
              onClick={() => handleItemClick('orders')} 
              className={activeItem === 'orders' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faClipboardList} /> Orders
            </li>
            <li 
              onClick={() => handleItemClick('withdrawal')} 
              className={activeItem === 'withdrawal' ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faMoneyBillTransfer} /> Withdrawal
            </li>
            <li 
              className={`kyc-approved ${activeItem === 'kyc' ? 'active' : ''}`}
              onClick={() => handleItemClick('kyc')}
            >
              <FontAwesomeIcon icon={faIdCard} /> KYC - Approved
            </li>
          </ul>
        </div>
        <div className="support-button">
          <FontAwesomeIcon icon={faHeadset} className="support-icon" />
          <button>Supports</button>
        </div>
      </div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </>
  );
}

export default Sidebar;
