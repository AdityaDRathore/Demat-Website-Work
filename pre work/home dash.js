// Sample data (replace with real data from an API)
const stockTickerData = [
    { name: 'NIFTY', value: '25,127.95', change: '+143.70', percentChange: '+0.58%' },
    { name: 'SENSEX', value: '81,973.05', change: '+361.40', percentChange: '+0.20%' },
    // Add more stock data here
];

const indicesData = [
    { name: 'Nifty Next 50', price: '25,651.7', change: '273.25', percentChange: '0.36' },
    { name: 'Nifty Midcap', price: '59,465.45', change: '252.75', percentChange: '0.43' },
    { name: 'Nifty Smallcap', price: '19,090.55', change: '81.75', percentChange: '0.43' },
    { name: 'Nifty Bank', price: '51,816.9', change: '644.60', percentChange: '1.26' },
    { name: 'Nifty IT', price: '42,872.75', change: '537.05', percentChange: '1.27' },
];

const topGainersData = {
    NSE: [
        { name: 'Wipro', price: '549.55', change: '21.25', percentChange: '4.02' },
        { name: 'Tech Mahindra', price: '1692.5', change: '45.45', percentChange: '2.76' },
        { name: 'HDFC Life I', price: '740.6', change: '16.75', percentChange: '2.31' },
        { name: 'HDFC Bank', price: '1688.1', change: '37.10', percentChange: '2.25' },
        { name: 'Larson & To', price: '3555.05', change: '72.50', percentChange: '2.08' },
    ],
    BSE: [
        // Add BSE data here
    ]
};

// Populate stock ticker
const stockTicker = document.querySelector('.stock-ticker');
stockTickerData.forEach(stock => {
    const stockItem = document.createElement('div');
    stockItem.classList.add('stock-ticker-item');
    stockItem.innerHTML = `
        <strong>${stock.name}</strong>
        <span>${stock.value}</span>
        <span style="color: ${parseFloat(stock.change) >= 0 ? 'var(--positive-color)' : 'var(--negative-color)'}">
            ${stock.change} (${stock.percentChange})
        </span>
    `;
    stockTicker.appendChild(stockItem);
});

// Populate indices table
const indicesTable = document.querySelector('#indices-table tbody');
indicesData.forEach(index => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${index.name}</td>
        <td>${index.price}</td>
        <td style="color: ${parseFloat(index.change) >= 0 ? 'var(--positive-color)' : 'var(--negative-color)'}">
            ${index.change}
        </td>
        <td style="color: ${parseFloat(index.percentChange) >= 0 ? 'var(--positive-color)' : 'var(--negative-color)'}">
            ${index.percentChange}%
        </td>
    `;
    indicesTable.appendChild(row);
});

// Populate top gainers table
function populateTopGainers(exchange) {
    const topGainersTable = document.querySelector('#top-gainers-table tbody');
    topGainersTable.innerHTML = '';
    topGainersData[exchange].forEach(stock => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${stock.name}</td>
            <td>${stock.price}</td>
            <td style="color: var(--positive-color)">${stock.change}</td>
            <td style="color: var(--positive-color)">${stock.percentChange}%</td>
        `;
        topGainersTable.appendChild(row);
    });
}

// Initialize top gainers table with NSE data
populateTopGainers('NSE');

// Add event listeners to toggle buttons
const toggleButtons = document.querySelectorAll('.toggle-buttons button');
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        populateTopGainers(button.dataset.exchange);
    });
});

// Create charts
function createChart(canvasId, label, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: data.length}, (_, i) => i),
            datasets: [{
                label: label,
                data: data,
                borderColor: 'var(--primary-color)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Sample data for charts (replace with real data)
const niftyData = [25000, 25050, 25100, 25075, 25125, 25150, 25100, 25125];
const sensexData = [81500, 81600, 81700, 81650, 81800, 81900, 81850, 81975];

createChart('nifty-chart', 'NIFTY', niftyData);
createChart('sensex-chart', 'SENSEX', sensexData);