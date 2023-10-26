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
        const result1 = await axios.get('https://api.coingecko.com/api/v3/ping');
        const result2 = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const result3 = await axios.get('https://api.coingecko.com/api/v3/coins/list');
        const result4 = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        const result5 = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin');
        const result6 = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/tickers');
        const result7 = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/history?date=30-12-2017');
        const result8 = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1');
        const result9 = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232');
        const result10 = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/status_updates');
        const result11 = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=1');
        const result12 = await axios.get('https://api.coingecko.com/api/v3/exchanges');
        const result13 = await axios.get('https://api.coingecko.com/api/v3/exchanges/list');
        const result14 = await axios.get('https://api.coingecko.com/api/v3/exchanges/binance');
        const result15 = await axios.get('https://api.coingecko.com/api/v3/exchanges/binance/tickers');

        setData({
          ping: result1.data,
          simplePrice: result2.data,
          coinsList: result3.data,
          coinsMarkets: result4.data,
          bitcoin: result5.data,
          bitcoinTickers: result6.data,
          bitcoinHistory: result7.data,
          bitcoinMarketChart: result8.data,
          bitcoinMarketChartRange: result9.data,
          bitcoinStatusUpdates: result10.data,
          bitcoinOhlc: result11.data,
          exchanges: result12.data,
          exchangesList: result13.data,
          binance: result14.data,
          binanceTickers: result15.data
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
  <div>
    <h1>Crypto Dashboard</h1>
    {/* Display the data in a structured format */}
    <div>
      <h2>Ping</h2>
      <p>{JSON.stringify(data.ping)}</p>

      <h2>Bitcoin Price</h2>
      {/* Pass the price data to the Chart component */}
      <Line data={data.simplePrice} />

      <h2>Coins List</h2>
      <p>{JSON.stringify(data.coinsList)}</p>

      <h2>Coins Markets</h2>
      <p>{JSON.stringify(data.coinsMarkets)}</p>

      <h2>Bitcoin</h2>
      <p>{JSON.stringify(data.bitcoin)}</p>

      <h2>Bitcoin Tickers</h2>
      <p>{JSON.stringify(data.bitcoinTickers)}</p>

      <h2>Bitcoin History</h2>
      <p>{JSON.stringify(data.bitcoinHistory)}</p>

      <h2>Bitcoin Market Chart</h2>
      {/* Pass the market chart data to the Chart component */}
      <Line data={data.bitcoinMarketChart} />

      <h2>Bitcoin Market Chart Range</h2>
      {/* Pass the market chart range data to the Chart component */}
      <Line data={data.bitcoinMarketChartRange} />

      <h2>Bitcoin Status Updates</h2>
      <p>{JSON.stringify(data.bitcoinStatusUpdates)}</p>

      <h2>Bitcoin OHLC</h2>
      {/* Pass the OHLC data to the Chart component */}
      <Line data={data.bitcoinOhlc} />

      <h2>Exchanges</h2>
      <p>{JSON.stringify(data.exchanges)}</p>

      <h2>Exchanges List</h2>
      <p>{JSON.stringify(data.exchangesList)}</p>

      <h2>Binance</h2>
      <p>{JSON.stringify(data.binance)}</p>

      <h2>Binance Tickers</h2>
      <p>{JSON.stringify(data.binanceTickers)}</p>
    </div>
  </div>
  );
}
