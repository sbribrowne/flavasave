import React from "react";
import LoginForm from "../Forms/LoginForm.js";

const Login = () => (
  <div className="loginBox">
    <img src={require('../../images/logo_white.png')} alt="Store Image" height = "120" />
    <h3 className="loginSubTitle">Your One-Stop Recipe Library.</h3>
    <h4 className="loginTitle">LOGIN</h4>
    <LoginForm />
    <p class="loginText">Don't have an account? <a class="signupLink" href="/signup">Sign up!</a></p>
    <a class="loginText signupLink">Forget Password?</a>
  </div>
);

export default Login;
