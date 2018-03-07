import React from "react";

import { Link } from "react-router-dom";

const NavLogged = () => (
  <nav class="navbar" id="homeNav">
    <div class="container-fluid bg-danger">
      <div class="navbar-header">
        <a class="navbar-brand" id="navbarlogo" href="#">
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
          <Link className="nav-item nav-link" to="/">
            LOGOUT
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default NavLogged;
