import React from "react";

const About = () => (
  <div className="card-deck">
    <div className="card">
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Store.</h5>
        <p className="card-text">
          Store all the recipes you come across while browsing the internet in
          just one place.
        </p>
      </div>
    </div>
    <div className="card">
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Organize.</h5>
        <p className="card-text">
          Search through and organize recipes that you've cooked or ones that
          need to be cooked.
        </p>
      </div>
    </div>
    <div className="card">
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Edit.</h5>
        <p className="card-text">
          Edit ingredients and instructions to your liking and mark the
          ingredients to create your shopping list.
        </p>
      </div>
    </div>
  </div>
);

export default About;
