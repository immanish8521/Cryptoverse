import React, { useState } from "react";
import IconCrypto from "../images/cryptocurrency.png";
import HumIcon from "../images/hum_icon.png";
import { Link } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineFund,
  AiOutlineMoneyCollect,
  AiOutlineBulb,
  AiOutlineClose,
} from "react-icons/ai";

import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggle_Handler = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="navbar__container">
        <div className="navbar">
          <div className="navbar__main">
            <img className="image_nav_icon" src={IconCrypto} alt="imagessss" />
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <h1>Cryptoverse</h1>
            </Link>
          </div>
          <div className="hum_icon" onClick={toggle_Handler}>
            {toggle ? (
              <AiOutlineClose className="close_icon" />
            ) : (
              <img src={HumIcon} alt="list_icon" width="40" height="30" />
            )}
          </div>
        </div>
        <nav className="navbar__list">
          <ul>
            <li>
              <AiOutlineHome className="list__icon" />
              <NavLink className="navbar__link" to="/">
                Home
              </NavLink>
            </li>

            <li>
              <AiOutlineFund className="list__icon" />
              <NavLink className="navbar__link" to="/cryptocurrencies">
                Cryptocurrencies
              </NavLink>
            </li>
            <li>
              <AiOutlineMoneyCollect className="list__icon" />
              <NavLink className="navbar__link" to="/exchanges">
                Exchanges
              </NavLink>
            </li>
            <li>
              <AiOutlineBulb className="list__icon" />
              <NavLink className="navbar__link" to="/news">
                News
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
