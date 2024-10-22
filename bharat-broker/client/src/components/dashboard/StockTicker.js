import React from 'react';
import '../../styles/Dashboard.css';

function StockTicker() {
  return (
    <div className="stock-ticker-card">
      <iframe 
        src="https://akm-img-a-in.tosshub.com/aajtak/resource/market-widgets/prod/bse-nse-ticker-v2.html?v=4.0" 
        title="Stock Ticker"
        width="100%" 
        height="50" 
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default StockTicker;
