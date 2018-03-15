import React from "react";
import LoginForm from "../Forms/LoginForm.js";

const Login = () => (
  <div className="loginBox">
    <img
      className="login-logo"
      src={require("../../images/logo_white.png")}
      alt="Store Image"
    />
    <h3 className="loginSubTitle">Your One-Stop Recipe Library.</h3>
    <h4 className="loginTitle">LOGIN</h4>
    <LoginForm />
    <p className="loginText">
      Don't have an account?{" "}
      <a className="signupLink" href="/signup">
        Sign up!
      </a>
    </p>
    <a className="loginText signupLink">Forget Password?</a>
  </div>
);

export default Login;
