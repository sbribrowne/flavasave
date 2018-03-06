import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg" id="homeNav">
    <a className="navbar-brand" href="#">
      <img src={require('../../images/logo_green.png')} alt="FlavaSave" height="42" />
    </a>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="#">
          About
        </a>
        <a className="nav-item nav-link" href="#">
          How It Works
        </a>
        <a className="nav-item nav-link" href="#">
          Sign In
        </a>
        <a className="nav-item nav-link" href="#">
          Sign Up
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
