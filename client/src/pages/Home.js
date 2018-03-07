import React from "react";
import Nav from "../components/Nav/Nav.js";
import Login from "../components/Home/Login.js";
import About from "../components/Home/About.js";
import Howitworks from "../components/Home/Howitworks.js";
import Footer from "../components/Footer/Footer.js";
import "../stylesheets/css/main.css";

const Home = () => {
  return (
    <div class="homebody">
      <Nav />
      <br />
      <Login />
      <br />
      <br />
      <h1 className="aboutHeader">ABOUT</h1>
      <About />
      <br />
      <Howitworks />
      <Footer />
    </div>
  );
};

export default Home;
