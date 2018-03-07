import React from "react";
import Nav from "../components/Nav/Nav.js";
import Panel from "../components/Panels/Panel";
import SignUpForm from "../components/Forms/SignUpForm";
import Footer from "../components/Footer/Footer.js";

const SignUp = () => {
  return (
    <div>
      <Nav />
      <Panel name={"SignUp"}>
      <SignUpForm />
      </Panel>
      <Footer />
    </div>
  );
};

export default SignUp;
