import React from "react";

const About = () => (
  <div className="row card-deck row-eq-height">
    <div className="col-md-4 big-card">
      <div className="col-md-12 card">
        <img className="card-img-top" src={require('../../images/mitts.png')} alt="Store Image" height = "90" />
        <div className="card-body">
          <h5 className="card-title">STORE.</h5>
          <p className="card-text">
            Store all the recipes you come across while browsing the internet in
            just one place with just the URL.
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-4 big-card">
    <div className="col-md-12 card">
        <img className="card-img-top" src={require('../../images/spatulas.png')} alt="Organize Image" height = "90" />
        <div className="card-body">
          <h5 className="card-title">ORGANIZE.</h5>
          <p className="card-text">
            Search through and organize recipes that you have already cooked or ones that
            need to be cooked.
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-4 big-card">
      <div className="col-md-12 card">
        <img className="card-img-top" src={require('../../images/chef_green.png')} alt="Edit Image" height = "90" />
        <div className="card-body">
          <h5 className="card-title">EDIT.</h5>
          <p className="card-text">
            Edit ingredients and instructions to your liking and check the
            ingredients you already have.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
