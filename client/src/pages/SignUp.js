import React from "react";
import Nav from "../components/Nav/Nav.js";
import Panel from "../components/Panels/Panel";
import SignUpForm from "../components/Forms/SignUpForm";

const SignUp = () => {
  return (
    <div>
      <Nav />
      <Panel name={"SignUp"}>
      <SignUpForm />
      </Panel>
    </div>
  );
};

export default SignUp;
