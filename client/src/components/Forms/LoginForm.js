import React from "react";

const LoginForm = props => (
  <div className="sign-up-form">
    <form>
      <div className="form-group">
        <label class="form-text" htmlFor="email">E-MAIL</label>
        <input
          name="email"
          className="form-control"
          onChange={props.handleInputChange}
        />
      </div>
      <div className="form-group">
        <label class="form-text" htmlFor="password">PASSWORD</label>
        <input
          name="password"
          className="form-control"
          onChange={props.handleInputChange}
        />
      </div>
      <button onClick={props.handleOnSubmit} className="btn btn-primary btn-lg login-button">
        SIGN IN
      </button>
    </form>
  </div>
);

export default LoginForm;
