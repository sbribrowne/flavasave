import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

class SignUpForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    errors: {}
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    // set state for errors to be passed to the object > clear errors > then repopulate
    this.setState({ errors: {} });
    event.preventDefault();
    // console.log(this.state);
    this.props
      .userSignUpRequest(this.state)
      .then(() => {})
      .catch(error => {
        this.setState({ errors: error.response.data });
      });
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="sign-up-form">
        <form className="signUpForm" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstname" className="signup-label">
              FIRST NAME
            </label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              value={this.state.firstname}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname" className="signup-label">
              LAST NAME
            </label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              value={this.state.lastname}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username" className="signup-label">
              USERNAME
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
            {errors.username && (
              <span className="help-block">{errors.username}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email" className="signup-label">
              E-MAIL
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="signup-label">
              PASSWORD
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg signup-button"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired
};

export default SignUpForm;
