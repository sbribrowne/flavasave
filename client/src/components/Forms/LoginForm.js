import React from "react";

const LoginForm = props => (
  <div className="sign-up-form">
    <form className="text-center">
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
        Log In
      </button>
    </form>
  </div>
);

export default LoginForm;
