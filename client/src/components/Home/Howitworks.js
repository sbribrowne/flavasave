import React from "react";

const Howitworks = () => (
  <div className="container-fluid howItWorksContainer">
    <img className="card-img-top" src={require('../../images/timer.png')} alt="Timer Image" height = "130" />
    <h1 className="howItWorksTitle">HOW IT WORKS.</h1>
    <ol>
      <li className="howItWorksText">1. Create and Accout or Login</li>
      <li className="howItWorksText">
        2. All you need is the recipe URL. Input the URL into the text area on your
        homepage. The app will do its magic, and your recipe will be added to
        your account.
      </li>
      <li className="howItWorksText">3. Explore our features and start cooking!</li>
    </ol>
  </div>
);

export default Howitworks;
