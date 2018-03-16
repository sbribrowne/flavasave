import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar" id="homeNav">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" id="navbarlogo" href="#">
              <Link to="/userpage">
                <img
                  id="navbarlogo"
                  src={require("../../images/logo_green.png")}
                  alt="FlavaSave"
                  height="60"
                />
              </Link>
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
  }
}

export default Nav;
