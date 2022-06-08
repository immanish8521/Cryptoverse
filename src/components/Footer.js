import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
const Footer = () => {
  return (
    <div className="footer__main">
      <div>
        <h3>Copyright &copy; 2022Cryptoverse</h3>
      </div>
      <div>
        <h3>All Rights Reserved.</h3>
      </div>
      <div className="footer_link">
        <Link className="footer__link" to={"/"}>
          Home
        </Link>
        <Link className="footer__link" to={"/exchanges"}>
          Exchanges
        </Link>
        <Link className="footer__link" to={"/news"}>
          News
        </Link>
      </div>
    </div>
  );
};

export default Footer;
