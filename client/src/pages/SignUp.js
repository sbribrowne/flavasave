import React from "react";
import Nav from "../components/Nav/Nav.js";
import SignUpForm from "../components/Forms/SignUpForm";
import Footer from "../components/Footer/Footer.js";

const SignUp = () => {
  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 signup-info">
            <img
              src={require("../images/chef_white.png")}
              height="180"
            />
            <br />
            <h1 className="signup-header">START COOKING</h1>
            <h4 className="signup-text">with your one-stop recipe library!</h4>
          </div>
          <div className="col-md-8 signup-form">
            <h1 className="signup-title">SIGN UP</h1>
            <SignUpForm />
          </div>
        </div>
        <p className="footertext signup-footer"> © 2018 FLAVASAVE</p>
      </div>
    </div>
  );
};

export default SignUp;
