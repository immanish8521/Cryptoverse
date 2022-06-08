import React, { useState, useEffect } from "react";
import "../styles/cryptocardcontainer.css";
import LineChart from "./LineChart";
import axios from "axios";
import { UserData } from "../Data";
import BitCoinAbout from "./BitCoinAbout";
import Footer from "./Footer";

const CryptoCardContainer = () => {
  const [coinName, setCoinName] = useState([]);
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#0071BD"],
      },
    ],
  });

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://coinranking.p.rapidapi.com/coins",
      // params: {
      //   referenceCurrencyUuid: "yhjMzLPhuIDl",
      //   timePeriod: "24h",
      //   "tiers[0]": "1",
      //   orderBy: "marketCap",
      //   orderDirection: "desc",
      //   limit: "1",
      //   offset: "0",
      // },
      params: {
        limit: "1",
      },
      headers: {
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        "X-RapidAPI-Key": "ec4517e200msh0679e26958c9708p1f2d6fjsna46f625fa838",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setCoinName(response.data.data.coins);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {coinName.map((element) => {
        return (
          <div className="cryptocard_main">
            <div className="cryptocardcontainer_header">
              <h1>{element.name} (BTC) Price</h1>
              <p>
                {element.name} live price in US Dollar (USD). View value
                statistics, market cap and supply.
              </p>
              <hr />
            </div>
            <div className="cryptocardcontainer_chart_header">
              <h1>Bitcoin Price Chart</h1>
              <h4>Change: -1.43% Current Bitcoin Price: $38.4K</h4>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "90%",
                }}
              >
                <LineChart userData={userData} />
              </div>
            </div>
            <div className="cryptocard_container_stats">
              <div className="cryptocard_container_stats_1">
                <div>
                  <h1>Bitcoin Value Statistics</h1>
                  <p>
                    An overview showing the statistics of Bitcoin, such as the
                    base and quote currency, the rank, and trading volume.
                  </p>
                </div>

                <div className="crypto_card_container_stats_flex">
                  <p>$ Price to USD</p>
                  <p>
                    <b>$ 38.7K</b>
                  </p>
                </div>
                <hr />
                <div className="crypto_card_container_stats_flex">
                  <p>$ Price to USD</p>
                  <p>
                    <b>$ 38.7K</b>
                  </p>
                </div>
                <hr />
                <div className="crypto_card_container_stats_flex">
                  <p>$ Price to USD</p>
                  <p>
                    <b>$ 38.7K</b>
                  </p>
                </div>
                <hr />
                <div className="crypto_card_container_stats_flex">
                  <p>$ Price to USD</p>
                  <p>
                    <b>$ 38.7K</b>
                  </p>
                </div>
                <hr />
                <div className="crypto_card_container_stats_flex">
                  <p>$ Price to USD</p>
                  <p>
                    <b>$ 38.7K</b>
                  </p>
                </div>
                <hr />
              </div>

              <div className="cryptocard_container_stats_2">
                <div>
                  <h1>Other Stats Info</h1>
                  <p>
                    An overview showing the statistics of Bitcoin, such as the
                    base and quote currency, the rank, and trading volume.
                  </p>
                </div>

                <div className="crypto_card_container_stats_flex">
                  <p>Number Of Markets</p>
                  <p>
                    <b>15173</b>
                  </p>
                </div>
                <hr />
                <div className="crypto_card_container_stats_flex">
                  <p>Number Of Exchanges</p>
                  <p>
                    <b>215</b>
                  </p>
                </div>
                <hr />
                <div className="crypto_card_container_stats_flex">
                  <p>Aprroved Supply</p>
                  <p>
                    <b>$ 19M</b>
                  </p>
                </div>
                <hr />
                <div className="crypto_card_container_stats_flex">
                  <p>Total Supply</p>
                  <p>
                    <b>$ 19M</b>
                  </p>
                </div>
                <hr />
                <div className="crypto_card_container_stats_flex">
                  <p>Circulating Supply</p>
                  <p>
                    <b>$ 19M</b>
                  </p>
                </div>
                <hr />
              </div>
            </div>
            <BitCoinAbout />
          </div>
        );
      })}
      <Footer />
    </>
  );
};

export default CryptoCardContainer;
