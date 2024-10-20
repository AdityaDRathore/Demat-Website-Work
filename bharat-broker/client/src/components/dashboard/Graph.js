import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Graph({ title }) {
  // Mock data for the graph
  const data = [
    { time: '09:00', value: 24950 },
    { time: '10:00', value: 25000 },
    { time: '11:00', value: 25030 },
    { time: '12:00', value: 24980 },
    { time: '13:00', value: 25010 },
    { time: '14:00', value: 25050 },
    { time: '15:00', value: 24990 },
    { time: '16:00', value: 24971 },
  ];

  return (
    <div className="graph">
      <h3>{title}</h3>
      <div className="graph-tabs">
        <button className="active">1D</button>
        <button>5D</button>
        <button>1M</button>
        <button>3M</button>
        <button>1Y</button>
        <button>5Y</button>
        <button>ALL</button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graph;
