import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="navbar" id="homeNav">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" id="navbarlogo" href="#">
          <img
            src={require("../../images/logo_green.png")}
            alt="FlavaSave"
            height="60"
          />
        </a>
      </div>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="nav navbar-nav navbar-right">
          <Link className="nav-item nav-link" to="/">
            ABOUT
          </Link>
          <Link className="nav-item nav-link" to="/">
            HOW IT WORKS
          </Link>
          <Link className="nav-item nav-link" to="/signup">
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
