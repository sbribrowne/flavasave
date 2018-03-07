import React from "react";
import LoginForm from "../Forms/LoginForm.js";

const Login = () => (
  <div className="loginBox">
    <img
      className="card-img-top"
      src={require("../../images/logo_white.png")}
      alt="Store Image"
      height="60"
    />
    <h3 className="loginSubTitle">Your One-Stop Recipe Library</h3>
    <LoginForm />
  </div>
);

export default Login;
