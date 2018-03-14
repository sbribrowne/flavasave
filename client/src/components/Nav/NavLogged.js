import React from "react";

import { Link } from "react-router-dom";

const NavLogged = () => (
  <nav className="logged-navbar" id="homeNav">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" id="navbarlogo" href="#">
          <img
            src={require("../../images/logo_white.png")}
            alt="FlavaSave"
            height="55"
          />
        </a>
      </div>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="nav navbar-nav navbar-right">
          <Link className="logged-nav-item nav-link" to="/">
            LOGOUT
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default NavLogged;
