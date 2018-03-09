import React from "react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="sign-up-form">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="form-text" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label className="form-text" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg login-button">
            LOG IN
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
