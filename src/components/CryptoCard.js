import React, { useEffect, useState } from "react";
import "../styles/cryptocard.css";
import axios from "axios";
import millify from "millify";
import { Link } from "react-router-dom";

const CryptoCard = () => {
  const [cardData, setCardData] = useState([]);

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
        limit: "8",
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
        setCardData(response.data.data.coins);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="cryptocard_container">
        <div className="crypto_card_header">
          <h1>Top Cryptos</h1>
          <Link to={"/cryptocurrencies"} style={{ textDecoration: "none" }}>
            <h2>Show more</h2>
          </Link>
        </div>
        {cardData.map((ele, i) => {
          return (
            <Link
              to={"/cryptocardcontainer"}
              style={{ textDecoration: "none" }}
            >
              <div className="cards" key={i}>
                <div className="card__container">
                  <div className="card__header">
                    <h4>
                      {ele.rank}. {ele.name}
                    </h4>
                    <img src={ele.iconUrl} alt="" width={30} />
                  </div>
                  <div className="hr"></div>
                  <div className="card__deatils">
                    <p>Price: {millify(ele.price)}</p>
                    <p>Market Cap: {millify(ele.marketCap)}</p>
                    <p>Daily Change: {ele.change}%</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CryptoCard;
