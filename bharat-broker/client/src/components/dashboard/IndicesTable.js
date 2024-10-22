import React, { useState, useEffect } from 'react';

// Mock data function
const getMockIndicesData = () => {
  return [
    { name: 'Nifty 50', price: '17,856.50', change: '-53.15', changePercent: '-0.30%' },
    { name: 'Sensex', price: '60,621.77', change: '-236.66', changePercent: '-0.39%' },
    { name: 'Nifty Bank', price: '41,559.40', change: '+15.25', changePercent: '+0.04%' },
    { name: 'Nifty IT', price: '29,745.30', change: '-235.60', changePercent: '-0.79%' },
    { name: 'Nifty Midcap 100', price: '31,195.55', change: '-78.45', changePercent: '-0.25%' },
  ];
};

function IndicesTable() {
  const [indices, setIndices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIndices = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockData = getMockIndicesData();
        setIndices(mockData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching indices data:', error);
        setError('Failed to fetch indices data. Please try again later.');
        setLoading(false);
      }
    };

    fetchIndices();
    const intervalId = setInterval(fetchIndices, 60000); // Refresh every minute

    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <div>Loading indices data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="indices-table">
      <h3>Indices</h3>
      <div className="table-container">
        {indices.length > 0 ? (
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
        ) : (
          <div>No indices data available</div>
        )}
      </div>
    </div>
  );
}

export default IndicesTable;
