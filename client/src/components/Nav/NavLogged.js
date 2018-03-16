import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/loginActions";

class NavLogged extends React.Component {
  render() {
    return (
      <nav className="logged-navbar" id="homeNav">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" id="navbarlogo" href="#">
              <img
                className="logged-logo-white"
                src={require("../../images/logo_white.png")}
                alt="FlavaSave"
              />
            </a>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="nav navbar-nav navbar-right">
            <a
                className="logged-nav-item nav-link"
                href="/"
                onClick={this.logout}
              >
                MY RECIPES
              </a>
              <a
                className="logged-nav-item nav-link"
                href="/"
                onClick={this.logout}
              >
                LOG OUT
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavLogged;
