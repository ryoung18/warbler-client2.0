import React, { Component } from "react";
import "./UserForm.css";

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleLogin}>
          <div className="form-field">
            <label>Email</label>
            <input
              type="text"
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
            />
          </div>

          <div className="form-field">
            <label>Username</label>
            <input
              type="text"
              onChange={this.handleChange}
              name="username"
              value={this.state.username}
            />
          </div>

          <div className="form-field">
            <label>Password</label>
            <input
              type="password"
              onChange={this.handleChange}
              name="password"
              value={this.state.password}
            />
          </div>
          <button value="">Login</button>
        </form>
      </div>
    );
  }
}

export default LogInForm;
