import React, { Component } from "react";
import Nav from "../components/Nav/Nav.js";
import About from "../components/Home/About.js";
import Howitworks from "../components/Home/Howitworks.js";
import "../stylesheets/css/main.css";

const Home = () => {
  return (
    <div>
      <Nav />
      <br />
      <br />
      <About />
      <br />
      <Howitworks />
    </div>
  );
};

export default Home;
