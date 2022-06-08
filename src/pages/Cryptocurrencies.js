import React from "react";
import CryptocurrenciesComp from "../components/CryptocurrenciesComp";
import Footer from "../components/Footer";

const Cryptocurrencies = () => {
  return (
    <>
      <div style={{ width: "80vw", minHeight: "100vh" }}>
        <CryptocurrenciesComp />
        <Footer />
      </div>
    </>
  );
};

export default Cryptocurrencies;
