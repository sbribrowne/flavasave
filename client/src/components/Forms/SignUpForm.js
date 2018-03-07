import React from "react";

const SignUpForm = props => (
  <div className="sign-up-form">
    <form className="text-center">
      <div class="form-group">
        <label htmlFor="firstname">First Name</label>
        <input type="text" class="form-control" name="username" />
      </div>
      <div class="form-group">
        <label htmlFor="lastname">Last Name</label>
        <input type="text" class="form-control" name="username" />
      </div>
      <div class="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" class="form-control" name="username" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          className="form-control"
          onChange={props.handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          name="password"
          className="form-control"
          onChange={props.handleInputChange}
        />
      </div>
      <button onClick={props.handleOnSubmit} className="btn btn-primary btn-lg">
        Sign Up
      </button>
    </form>
  </div>
);

export default SignUpForm;
