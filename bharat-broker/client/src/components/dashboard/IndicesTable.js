import React from 'react';

function IndicesTable() {
  const indices = [
    { name: 'Nifty Next 50', price: '75,698.15', change: '-161.70', changePercent: '-0.21' },
    { name: 'Nifty Midca...', price: '59,451.85', change: '-141.40', changePercent: '-0.24' },
    { name: 'Nifty Smallc...', price: '19,304.9', change: '2.85', changePercent: '0.01' },
    { name: 'Nifty Bank', price: '51,801.05', change: '-104.95', changePercent: '-0.20' },
    { name: 'Nifty IT', price: '42,230.7', change: '-500.60', changePercent: '-1.17' },
  ];

  return (
    <div className="indices-table">
      <h3>Indices</h3>
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
          {indices.map((index, i) => (
            <tr key={i}>
              <td>{index.name}</td>
              <td>{index.price}</td>
              <td className={parseFloat(index.change) < 0 ? 'negative' : 'positive'}>{index.change}</td>
              <td className={parseFloat(index.changePercent) < 0 ? 'negative' : 'positive'}>{index.changePercent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IndicesTable;
