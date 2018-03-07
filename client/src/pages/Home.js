import React, { Component } from "react";
import Nav from "../components/Nav/Nav.js";
import About from "../components/Home/About.js";
import "../stylesheets/css/main.css";

const Home = () => {
  return (
    <div>
      <Nav />
      <br />
      <About />
      <br />
    </div>
  );
};

export default Home;
