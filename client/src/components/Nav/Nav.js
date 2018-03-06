import React from "react";

const Nav = () => (
  <nav class="navbar navbar-expand-lg navbar-light sticky-top bg-light">
    <a class="navbar-brand" href="#">
      <img src="../../images/logo_green.png" alt="FlavaSave" height="42" width="42" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div
      class="collapse navbar-collapse justify-content-end"
      id="navbarNavAltMarkup"
    >
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#">
          Home <span class="sr-only">(current)</span>
        </a>
        <a class="nav-item nav-link" href="#">
          About
        </a>
        <a class="nav-item nav-link" href="#">
          How It Works
        </a>
        <a class="nav-item nav-link" href="#">
          Sign In
        </a>
        <a class="nav-item nav-link" href="#">
          Sign Up
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
