import React from "react";

const About = () => (
  <div className="row card-deck">
    <div className="col-md-4 big-card">
      <img
        className="card-img-top"
        src={require("../../images/mitts.png")}
        alt="Store"
        height="90"
      />
      <div className="card-body">
        <h5 className="card-title">STORE.</h5>
        <p className="card-text">
          Store any and all recipes while browsing the internet in one
          convenient location with just the web address (URL).
        </p>
      </div>
    </div>
    <div className="col-md-4 big-card">
      <img
        className="card-img-top"
        src={require("../../images/spatulas.png")}
        alt="Organize"
        height="90"
      />
      <div className="card-body">
        <h5 className="card-title">ORGANIZE.</h5>
        <p className="card-text">
          Organize and search saved recipes that you have already cooked or need
          to cook in the future.
        </p>
      </div>
    </div>
    <div className="col-md-4 big-card">
      <img
        className="card-img-top"
        src={require("../../images/chef_green.png")}
        alt="Edit"
        height="90"
      />
      <div className="card-body">
        <h5 className="card-title">EDIT.</h5>
        <p className="card-text">
          Edit ingredients and instructions to your liking, or if something gets missed, 
          and check the ingredients you already have.
        </p>
      </div>
    </div>
  </div>
);

export default About;
