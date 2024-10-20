import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="dashboard-header">
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Search here..." />
      </div>
      <div className="user-profile">
        <span>Jagadamba Parsad</span>
        <FontAwesomeIcon icon={faUser} />
      </div>
    </header>
  );
}

export default Header;
