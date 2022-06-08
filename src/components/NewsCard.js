import React, { useEffect, useState } from "react";
import "../styles/newscard.css";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

const NewsCard = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news",
      params: { safeSearch: "Off", textFormat: "Raw" },
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        "X-RapidAPI-Key": "ec4517e200msh0679e26958c9708p1f2d6fjsna46f625fa838",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setNewsData(response.data.value);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div className="main__news__header">
      <div className="news__header">
        <h1>Latest Crypto News</h1>
        <Link to={"/news"} style={{ textDecoration: "none" }}>
          <h2>Show more</h2>
        </Link>
      </div>
      {newsData.map((ele, id) => {
        return (
          <a
            href={ele.url}
            target="_blank"
            style={{ color: "black" }}
            rel="noreferrer"
          >
            <div className="news__card" key={id}>
              <div className="news__card__container">
                <div className="news__card__header">
                  <h2>{ele.name}</h2>
                  <img
                    src={ele.image.thumbnail.contentUrl}
                    alt="news_imagess"
                    width={"120rem"}
                    height={"120rem"}
                  />
                </div>
                <div className="news__para">
                  <p>{ele.description}</p>
                </div>
                <div className="news__card__footer">
                  <div style={{ display: "flex" }}>
                    <img
                      src={ele.provider.map(
                        (img) => img.image.thumbnail.contentUrl
                      )}
                      alt="provider_imagess"
                      width={"30rem"}
                      style={{ marginRight: "1rem" }}
                    />
                    <p>{ele.provider.map((name) => name.name)}</p>
                  </div>
                  <p>{moment(ele.datePublished).startOf("hour").fromNow()}</p>
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default NewsCard;
