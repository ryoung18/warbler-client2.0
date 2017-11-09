import React, { Component } from "react";
import "./UserForm.css";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      name: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newUser = { ...this.state };
    this.props.handleSubmit(newUser);
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
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
            <label>Name</label>
            <input
              type="text"
              onChange={this.handleChange}
              name="name"
              value={this.state.name}
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
          <button value="">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
