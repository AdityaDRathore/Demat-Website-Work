import React from 'react';

function TopGainersTable() {
  const topGainers = [
    { name: 'HDFC Life I...', price: '726.8', change: '12.55', changePercent: '1.76' },
    { name: 'Dr Reddy\'s ...', price: '6710.9', change: '99.25', changePercent: '1.50' },
    { name: 'Grasim Inds', price: '2764.1', change: '28.30', changePercent: '1.03' },
    { name: 'Bharti Airtel', price: '1733.95', change: '16.70', changePercent: '0.97' },
    { name: 'HDFC Bank', price: '1699.8', change: '15.70', changePercent: '0.93' },
  ];

  return (
    <div className="top-gainers-table">
      <h3>Top Gainers</h3>
      <div className="table-tabs">
        <button className="active">NSE</button>
        <button>BSE</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Change</th>
            <th>%Change</th>
          </tr>
        </thead>
        <tbody>
          {topGainers.map((stock, i) => (
            <tr key={i}>
              <td>{stock.name}</td>
              <td>{stock.price}</td>
              <td className="positive">{stock.change}</td>
              <td className="positive">{stock.changePercent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopGainersTable;
