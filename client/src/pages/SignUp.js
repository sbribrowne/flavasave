import React from "react";
import Nav from "../components/Nav/Nav.js";
import SignUpForm from "../components/Forms/SignUpForm";
import Footer from "../components/Footer/Footer.js";

const SignUp = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-sm-4 panel panel-heading panel-success">
            Start Cooking
            <br />
            Start Cooking
            <br />
            Start Cooking
            <br />
            Start Cooking
            <br />
            Start Cooking
            <br />
            Start Cooking
            <br />
            Start Cooking
            <br />
            Start Cooking
            <br />
            Start Cooking
            <br />
            Start Cooking
          </div>
          <div className="col-sm-8">
            <SignUpForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
