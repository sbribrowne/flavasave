import React from "react";
import { Link } from "react-router-dom";
import Scrollchor from 'react-scrollchor';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar" id="homeNav">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/">
              <img
                id="navbarlogo"
                src={require("../../images/logo_green.png")}
                alt="FlavaSave"
                height="60"
              />
            </Link>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="nav navbar-nav navbar-right">
              <Scrollchor to="#homeAbout" className="nav-item nav-link">
              ABOUT
              </Scrollchor>
              <Scrollchor to="#howItWorks" className="nav-item nav-link">
                HOW IT WORKS
              </Scrollchor>
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
