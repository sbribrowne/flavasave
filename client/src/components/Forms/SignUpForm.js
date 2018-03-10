import React from "react";
import PropTypes from "prop-types";
import validateInput from "../../actions/validations/signup";
import TextFieldGroup from "./TextFieldGroup";

class SignUpForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
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
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="sign-up-form">
        <form className="signUpForm" onSubmit={this.onSubmit}>
          <TextFieldGroup
            error={errors.firstname}
            label="First Name"
            onChange={this.onChange}
            value={this.state.firstname}
            field="firstname"
          />
          <TextFieldGroup
            error={errors.lastname}
            label="Last Name"
            onChange={this.onChange}
            value={this.state.lastname}
            field="lastname"
          />
          <TextFieldGroup
            error={errors.username}
            label="Username"
            onChange={this.onChange}
            value={this.state.username}
            field="username"
          />
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
