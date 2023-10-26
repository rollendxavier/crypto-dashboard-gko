import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result1 = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1', {
          headers: {
            'X-CoinGecko-API-Key': 'YOUR_API_KEY'
          }
        });
        const result2 = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232', {
          headers: {
            'X-CoinGecko-API-Key': 'YOUR_API_KEY'
          }
        });
        const result3 = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/status_updates', {
          headers: {
            'X-CoinGecko-API-Key': 'YOUR_API_KEY'
          }
        });
        const result4 = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=1', {
          headers: {
            'X-CoinGecko-API-Key': 'YOUR_API_KEY'
          }
        });
        const result5 = await axios.get('https://api.coingecko.com/api/v3/exchanges', {
          headers: {
            'X-CoinGecko-API-Key': 'YOUR_API_KEY'
          }
        });
        const result6 = await axios.get('https://api.coingecko.com/api/v3/exchanges/list', {
          headers: {
            'X-CoinGecko-API-Key': 'YOUR_API_KEY'
          }
        });
        const result7 = await axios.get('https://api.coingecko.com/api/v3/exchanges/binance', {
          headers: {
            'X-CoinGecko-API-Key': 'YOUR_API_KEY'
          }
        });
        const result8 = await axios.get('https://api.coingecko.com/api/v3/exchanges/binance/tickers', {
          headers: {
            'X-CoinGecko-API-Key': 'YOUR_API_KEY'
          }
        });
        // Add more API calls here as needed

        setData({
          bitcoinMarketChart: result1.data,
          bitcoinMarketChartRange: result2.data,
          bitcoinStatusUpdates: result3.data,
          bitcoinOhlc: result4.data,
          exchanges: result5.data,
          exchangesList: result6.data,
          binance: result7.data,
          binanceTickers: result8.data
          // Add more data here as needed
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
  <div className={classes.root}>
    <h1>Crypto Dashboard</h1>
    {/* Display the data in a structured format */}
    <div>
      <h2>Bitcoin Market Chart</h2>
      {/* Pass the market chart data to the Chart component */}
      <Line data={data.bitcoinMarketChart} />

      <h2>Bitcoin Market Chart Range</h2>
      {/* Pass the market chart range data to the Chart component */}
      <Line data={data.bitcoinMarketChartRange} />

      <h2>Bitcoin Status Updates</h2>
      {/* Display the status updates in a structured format */}
      <p>{JSON.stringify(data.bitcoinStatusUpdates)}</p>

      <h2>Bitcoin OHLC</h2>
      {/* Pass the OHLC data to the Chart component */}
      <Line data={data.bitcoinOhlc} />

      <h2>Exchanges</h2>
      {/* Display the exchanges in a structured format */}
      <p>{JSON.stringify(data.exchanges)}</p>

      <h2>Exchanges List</h2>
      {/* Display the exchanges list in a structured format */}
      <p>{JSON.stringify(data.exchangesList)}</p>

      <h2>Binance</h2>
      {/* Display the Binance data in a structured format */}
      <p>{JSON.stringify(data.binance)}</p>

      <h2>Binance Tickers</h2>
      {/* Display the Binance tickers in a structured format */}
      <p>{JSON.stringify(data.binanceTickers)}</p>
    </div>
  </div>
  );
}
