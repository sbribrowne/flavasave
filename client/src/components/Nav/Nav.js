import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg" id="homeNav">
    <a className="navbar-brand" href="#">
      <img src={require('../../images/logo_green.png')} alt="FlavaSave" height="55" />
    </a>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="#">
          ABOUT
        </a>
        <a className="nav-item nav-link" href="#">
          HOW IT WORKS
        </a>
        <a className="nav-item nav-link" href="#">
          SIGN IN
        </a>
        <a className="nav-item nav-link" href="#">
          SIGN UP
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
