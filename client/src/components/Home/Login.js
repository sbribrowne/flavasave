import React from "react";
import LoginForm from "../Forms/LoginForm.js";

const Login = () => (
  <div className="loginBox">
    <img className="card-img-top" src={require('../../images/logo_white.png')} alt="Store Image" height = "95" />
    <h3 className="loginSubTitle">Your One-Stop Recipe Library.</h3>
    <h4 className="loginTitle">LOGIN</h4>
    <LoginForm />
    <p>Don't have an account? <a href="">Sign up!</a></p>
    <a>Forget Password?</a>
  </div>
);

export default Login;
