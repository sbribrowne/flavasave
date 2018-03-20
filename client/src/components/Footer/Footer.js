import React from "react";
import { Link } from "react-router-dom";
import Scrollchor from "react-scrollchor";

const Footer = () => (
  <footer>
    <ul className="navbar-left" id="footerleft">
      <li>
        <Scrollchor to="" className="footertext footerlink">
          LOGIN
        </Scrollchor>
      </li>
      <li>
        <Link className="footertext footerlink" to="/signup">
          SIGN UP
        </Link>
      </li>
    </ul>
    <p className="navbar-right footertext" id="footercopyright">
      {" "}
      © 2018 FLAVASAVE
    </p>
  </footer>
);

export default Footer;
