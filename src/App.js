import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import Exchanges from "./components/Exchanges";
import News from "./pages/News";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CryptoCardContainer from "./components/CryptoCardContainer";

const App = () => {
  return (
    <>
      <div className="main__app">
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />

            <Route path="exchanges" element={<Exchanges />} />

            <Route path="news" element={<News />} />
            <Route
              path="cryptocardcontainer"
              element={<CryptoCardContainer />}
            />
          </Routes>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
