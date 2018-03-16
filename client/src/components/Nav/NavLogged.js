import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/loginActions";

class NavLogged extends React.Component {
  render() {
    return (
      <nav className="logged-navbar" id="homeNav">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/userpage">
              <img
                className="logged-logo-white"
                src={require("../../images/logo_white.png")}
                alt="FlavaSave"
              />
            </Link>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="nav navbar-nav navbar-right">
              <Link
                className="logged-nav-item nav-link"
                to="/"
                onClick={logout}
              >
                LOG OUT
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavLogged;
