import React from "react";
import LoginForm from "../Forms/LoginForm.js";
import { Link } from "react-router-dom";

const Login = () => (
  <div className="loginBox">
    <img
      className="login-logo"
      src={require("../../images/logo_white.png")}
      alt="Store"
    />
    <h3 className="loginSubTitle">Your One-Stop Recipe Library.</h3>
    <h4 className="loginTitle">LOGIN</h4>
    <LoginForm />
    <p className="loginText">
      Don't have an account?{" "}
      <Link className="signupLink" to="/signup">
                Sign up!
      </Link>
    </p>
  </div>
);

export default Login;
