import React, { useEffect, useState } from 'react';
import { Line, Bar, Doughnut, Radar, PolarArea, Bubble, Scatter } from 'react-chartjs-2';
import axios from 'axios';

// Component for the /ping endpoint
export function PingChart() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://api.coingecko.com/api/v3/ping');
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Ping</h2>
      {/* Display the data in a structured format */}
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

// Component for the /simple/price endpoint
export function SimplePriceChart() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Simple Price</h2>
      {/* Display the data in a Line chart */}
      <Line data={data} />
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
        const result = await axios.get('https://api.coingecko.com/api/v3/exchanges/binance/tickers');
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
      {/* Display the data in a Bar chart */}
      <Bar data={data} />
    </div>
  );
}
