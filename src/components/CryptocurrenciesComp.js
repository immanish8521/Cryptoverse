import React, { useEffect, useState } from "react";
import axios from "axios";
import millify from "millify";
import "../styles/cryptocurrencies.css";

const CryptocurrenciesComp = () => {
  const [cardData, setCardData] = useState([]);
  const [search, setSearch] = useState("");

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
        limit: "100",
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
    <div>
      <div className="cryptocurrencies_search">
        <input
          className="search_container"
          type="search"
          placeholder="Search Cryptocurrencies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {cardData
        .filter((ele) => ele.name.toLowerCase().includes(search))
        .map((ele) => {
          return (
            <div className="card">
              <div className="card-container">
                <div className="card-header">
                  <h4>
                    {ele.rank}.{ele.name}
                  </h4>
                  <img src={ele.iconUrl} alt="" width={30} />
                </div>
                <hr />
                <div>
                  <div className="card-deatils">
                    <p>Price: {millify(ele.price)}</p>
                    <p>Market Cap: {millify(ele.marketCap)}</p>
                    <p>Daily Change: {ele.change}%</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CryptocurrenciesComp;
