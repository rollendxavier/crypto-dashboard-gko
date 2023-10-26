import React from 'react';
import Dashboard from './Dashboard';
import { BitcoinMarketChart, BitcoinMarketChartRange, BinanceTickersChart } from './ChartPro';

function App() {
  return (
    <div className="App">
      <h1>Crypto Dashboard</h1>
      <Dashboard />
      <BitcoinMarketChart />
      <BitcoinMarketChartRange />
      <BinanceTickersChart />
      {/* Add more chart components here as needed */}
    </div>
  );
}

export default App;
