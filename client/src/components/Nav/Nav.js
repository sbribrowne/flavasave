import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/loginActions";

class Nav extends React.Component {
  logout = event => {
    event.preventDefault();
    this.props.logout();
  };
  render() {
    const { isAuthenticated } = this.props.auth;
    // userLinks is authenticated user
    const userLinks = (
      <div className="container-fluid bg-danger">
        <div className="navbar-header">
          <a className="navbar-brand" id="navbarlogo" href="#">
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
            <a className="nav-item nav-link" href="/" onClick={this.logout}>
              LOG OUT
            </a>
          </div>
        </div>
      </div>
    );
    // guestLinks is nonauthenticated user
    const guestLinks = (
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" id="navbarlogo" href="#">
            <img
              id="navbarlogo"
              src={require("../../images/logo_green.png")}
              alt="FlavaSave"
              height="60"
            />
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
    );

    return (
      <nav className="navbar" id="homeNav">
        {isAuthenticated ? userLinks : guestLinks}
      </nav>
    );
  }
}

Nav.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(Nav);
