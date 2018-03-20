import React from "react";
import { Link } from "react-router-dom";

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
        </div>
      </nav>
    );
  }
}

export default Nav;
