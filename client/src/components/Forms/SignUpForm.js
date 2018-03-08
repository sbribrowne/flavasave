import React from "react";

const SignUpForm = props => (
  <div>
    <form>
      <div className="form-group">
        <label htmlFor="firstname" className="signup-label">FIRST NAME</label>
        <input type="text" className="form-control" name="username" />
      </div>
      <div className="form-group">
        <label htmlFor="lastname" className="signup-label">LAST NAME</label>
        <input type="text" className="form-control" name="username" />
      </div>
      <div className="form-group">
        <label htmlFor="username" className="signup-label">USERNAME</label>
        <input type="text" className="form-control" name="username" />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="signup-label">E-MAIL</label>
        <input
          name="email"
          className="form-control"
          onChange={props.handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="signup-label">PASSWORD</label>
        <input
          name="password"
          className="form-control"
          onChange={props.handleInputChange}
        />
      </div>
      <button onClick={props.handleOnSubmit} className="btn btn-primary btn-lg signup-button">
        SIGN UP
      </button>
    </form>
  </div>
);

export default SignUpForm;
