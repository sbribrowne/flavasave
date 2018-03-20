import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <ul className="navbar-left" id="footerleft">
      <li>
        <a className="footertext footerlink" href="#logintext">
          LOGIN
        </a>
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
