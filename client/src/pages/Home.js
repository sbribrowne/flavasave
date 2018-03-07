import React, { Component } from "react";
import Nav from "../components/Nav/Nav.js";
import Login from "../components/Home/Login.js";
import About from "../components/Home/About.js";
import Howitworks from "../components/Home/Howitworks.js";
import "../stylesheets/css/main.css";

const Home = () => {
  return (
    <div>
      <Nav />
      <br />
      <div className="row">
        <div className="col-4" />
        <div className="col-8">
          <Login />
        </div>
      </div>
      <br />
      <br />
      <About />
      <br />
      <Howitworks />
    </div>
  );
};

export default Home;
