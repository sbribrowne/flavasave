import React from "react";

const Login = () => (
  <div className="loginBox">
    <img className="card-img-top" src={require('../../images/logo_white.png')} alt="Store Image" height = "60" />
    <h3 className="loginSubTitle">Your One-Stop Recipe Library</h3>
    <ol>
      <li>Create and Accout or Login</li>
      <li>
        All you need is the recipe URL. Input the URL into the text area on your
        homepage. The app will do its magic, and your recipe will be added to
        your account.
      </li>
      <li>Explore our features and start cooking!</li>
    </ol>
  </div>
);

export default Login;
