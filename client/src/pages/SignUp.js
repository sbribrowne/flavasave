import React from "react";
import NavSignup from "../components/Nav/NavSignup.js";
import SignUpForm from "../components/Forms/SignUpForm";
import FooterLogged from "../components/Footer/FooterLogged.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userSignUpRequest } from "../actions/signUpActions.js";

class SignUp extends React.Component {
  render() {
    const { userSignUpRequest } = this.props;
    return (
      <div>
        <NavSignup />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4" id="signup-info">
              <img alt="" src={require("../images/chef_white.png")} height="180" />
              <br />
              <h1 className="signup-header">START COOKING</h1>
              <h4 className="signup-text">
                with your one-stop recipe library!
              </h4>
            </div>
            <div className="col-md-8 signup-form">
              <h1 className="signup-title">SIGN UP</h1>
              <SignUpForm userSignUpRequest={userSignUpRequest} />
            </div>
          </div>
        </div>
        <FooterLogged />
      </div>
    );
  }
}

SignUp.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired
};

// redux connect component to connect to redux store
export default connect(null, { userSignUpRequest })(SignUp);
