import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="navbar navbar-expand-lg" id="homeNav">
    <a className="navbar-brand" href="/">
      <img src={require('../../images/logo_green.png')} alt="FlavaSave" height="55" />
    </a>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/">
          ABOUT
        </Link>
        <Link className="nav-item nav-link" to="/">
          HOW IT WORKS
        </Link>
        <Link className="nav-item nav-link" to="/signup">
          SIGN IN
        </Link>
        <Link className="nav-item nav-link" to="/signup">
          SIGN UP
        </Link>
      </div>
    </div>
  </nav>
);

export default Nav;
