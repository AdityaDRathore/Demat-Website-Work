import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Orders.css';

function Orders() {
  const [profit, setProfit] = useState(0);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/orders');
      setOrders(response.data.orders);
      setProfit(response.data.totalProfit);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <div className="orders-container">
      <h2>Orders</h2>
      <div className="profit-loss-box">
        <h3>Profit And Loss</h3>
        <p className={`profit-value ${profit >= 0 ? 'profit' : 'loss'}`}>
          {profit >= 0 ? 'Profit: ' : 'Loss: '}{Math.abs(profit).toFixed(2)}
        </p>
      </div>
      {orders.length === 0 ? (
        <p className="no-orders">No orders found for the logged-in user.</p>
      ) : (
        <ul className="order-list">
          {orders.map((order) => (
            <li key={order.id} className="order-item">
              <p>Order ID: {order.id}</p>
              <p>Stock: {order.stock}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Price: {order.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Orders;
