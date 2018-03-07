import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (

  <nav class="navbar" id="homeNav">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" id="navbarlogo" href="#"><img src={require('../../images/logo_green.png')} alt="FlavaSave" height="55" /></a>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
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
