import React, { useEffect, useState } from 'react';
import { Line, Bar, Doughnut, Radar, PolarArea, Bubble } from 'react-chartjs-2';
import axios from 'axios';

// Component for the /coins/bitcoin/market_chart endpoint
export function BitcoinMarketChart() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1', {
          headers: {
            'X-CoinGecko-API-Key': 'YOUR_API_KEY'
          }
        });
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Bitcoin Market Chart</h2>
      {/* Pass the market chart data to the Chart component */}
      <Line data={data} />
    </div>
  );
}

// Component for the /coins/bitcoin/market_chart/range endpoint
export function BitcoinMarketChartRange() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232', {
          headers: {
            'X-CoinGecko-API-Key': 'YOUR_API_KEY'
          }
        });
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Bitcoin Market Chart Range</h2>
      {/* Pass the market chart range data to the Chart component */}
      <Bar data={data} />
    </div>
  );
}

// Add more components here for the other endpoints...
// ...

// Component for the /exchanges/binance/tickers endpoint
export function BinanceTickersChart() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://api.coingecko.com/api/v3/exchanges/binance/tickers', {
          headers: {
            'X-CoinGecko-API-Key': 'YOUR_API_KEY'
          }
        });
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Binance Tickers</h2>
      {/* Display the data in a Doughnut chart */}
      <Doughnut data={data} />
    </div>
  );
}
