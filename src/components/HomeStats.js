import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/homeStats.css";

const HomeStats = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "50",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        "X-RapidAPI-Key": "ec4517e200msh0679e26958c9708p1f2d6fjsna46f625fa838",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setStats(response.data.data.stats);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="mainhome__container">
      <div className="mainhome__heading">
        <h1>Global Crypto Stats</h1>
      </div>
      <div className="main__stats">
        <div className="main__stats_1">
          <div className="Total_Cryptocurrencies">
            <p>Total Cryptocurrencies</p>
            <h1>{stats.total}</h1>
          </div>
          <div className="total_market_cap">
            <p>Total Market Cap:</p>
            <h1>${stats.totalMarketCap}</h1>
          </div>
          <div className="total_crypto">
            <p>Total Coins</p>
            <h1>{stats.totalCoins}</h1>
          </div>
        </div>
        <div className="main__stats_2">
          <div>
            <p>Total Exchanges</p>
            <h1>{stats.totalExchanges}</h1>
          </div>
          <div className="total_volume">
            <p>Total 24h Volume</p>
            <h1>${stats.total24hVolume}</h1>
          </div>
          <div className="total_markets">
            <p>Total Markets</p>
            <h1>{stats.totalMarkets}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStats;
