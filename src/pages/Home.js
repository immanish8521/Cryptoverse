import React from "react";
import HomeStats from "../components/HomeStats";
import CryptoCard from "../components/CryptoCard";
import NewsCard from "../components/NewsCard";
import "../styles/homeMain.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="homestats__page">
        <div style={{ height: "60vh" }}>
          <HomeStats />
        </div>
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <div style={{ height: "auto" }}>
            <CryptoCard />
          </div>
        </Link>
        <div style={{ height: "80vh" }}>
          <NewsCard />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
