import React from "react";
import Nav from "../components/Nav/Nav.js";
import SignUpForm from "../components/Forms/SignUpForm";
import FooterLogged from "../components/Footer/FooterLogged.js";

const SignUp = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-sm-4 panel panel-heading panel-success">
            <img
              className="card-img-top"
              src={require("../images/chef_green.png")}
              height="180"
            />
            <br />
            <h1>Start Cooking</h1>
            <br />
            <h4>
              <i>with your one-stop recipe library!</i>
            </h4>
          </div>
          <div className="col-sm-8">
            <SignUpForm />
          </div>
        </div>
      </div>
      <FooterLogged />
    </div>
  );
};

export default SignUp;
