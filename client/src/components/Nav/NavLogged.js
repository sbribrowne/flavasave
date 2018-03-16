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
              <Link to="/userpage">
                <img
                  src={require("../../images/logo_white.png")}
                  alt="FlavaSave"
                  height="55"
                />
              </Link>
            </a>
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
