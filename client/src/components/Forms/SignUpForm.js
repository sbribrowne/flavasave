import React from "react";
import PropTypes from "prop-types";
import validateInput from "../../actions/validations/signup";
import TextFieldGroup from "./TextFieldGroup";
import axios from "axios";

class SignUpForm extends React.Component {
  state = {
    email: "",
    password: "",
    errors: {},
    isLoading: false // for signup button disabling if form is incomplete
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    // if not valid, set and populate state with errors
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit = event => {
    event.preventDefault();

    axios.post("api/signup", { email: this.state.email, password: this.state.password } );

    /*
    if (this.isValid()) {
      // set state for errors to be passed to the object > clear errors > then repopulate
      this.setState({ errors: {}, isLoading: true });
      this.props
        .userSignUpRequest(this.state)
        .then(() => {
          this.context.router.history.push("/userpage");
        })
        .catch(error => {
          this.setState({ errors: error.response.data, isLoading: false });
        });
    }
    */
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="sign-up-form">
        <form className="signUpForm" onSubmit={this.onSubmit}>
<<<<<<< HEAD
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
=======
          <TextFieldGroup
            error={errors.email}
            label="Email"
            onChange={this.onChange}
            value={this.state.email}
            field="email"
          />
          <TextFieldGroup
            error={errors.password}
            label="Password"
            onChange={this.onChange}
            value={this.state.password}
            field="password"
            type="password"
          />
>>>>>>> d4cca89df04dd83585abc7501f80f34dad5f1ddc
          <button
            type="submit"
            className="btn btn-primary btn-lg signup-button"
            disabled={this.state.isLoading}
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

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpForm;
