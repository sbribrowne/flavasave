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
          <div className="col-md-8">
            <SignUpForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
