import React, { Component } from "react";
import RoundButton from "./RoundButton";
import axios from "axios";
import { BASE_URL } from "./helpers";
import { setAuthorizationToken } from "./setAuthorizationToken";
import "./Form.css";

class FormLoginSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      name: "",
      password: "",
      error: "",
      randomTitle: [
        'Get Your Warble On!',
        'Get Ready To WARBLE!',
        "It's Warrbble Time!",
        'WaBbLe wAbBle Warble!'
      ],
      signup:
      [
         [ 'email',  "Email" ] ,
         [ 'username', "Username" ] ,
         [ 'name', "Name" ] ,
         [ 'password', "Password" ] ,
         [ 'button', "Sign Up" ]
      ],
      login:[
        [ 'username',  "Username" ],
        [ 'password',  "Password" ],
        [ 'button',  "Log in" ]
      ]
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

    const {email, username, name, password} = this.state;
    const location = this.props.location.pathname.slice(1);
    let userInfo = {};
    let url;

    if(location === "signup") {
      userInfo['email'] = email;
      userInfo['name'] = name;
      url = `${BASE_URL}/users`;
    } else {
      url = `${BASE_URL}/users/auth`;
    }
    userInfo['username'] = username;
    userInfo['password'] = password;

      axios
        .post(url, userInfo)
        .then(response => {
          const token = response.data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("user_id", response.data.user_id);
          setAuthorizationToken(token);
          this.setState({
            email: "",
            username: "",
            name: "",
            password: "",
            error: ""
          })
          this.props.history.push(`/users/${response.data.user_id}`);
        })
        .catch(error => {
          setAuthorizationToken();
          this.setState({
            error: "Invalid username or password. Please try again"
          })
        })
  };

  render () {
    const error = this.state.error ? (<p> {this.state.error} </p>) : '' ;
    const randomTitle = this.state.randomTitle[Math.floor(Math.random() * (this.state.randomTitle.length))];
    const location = this.props.location.pathname.slice(1);
    const createForm = this.state[location].map((f,i) => {
        let inputType;

        if(f[0] === "button" ) {
          return (
            <div className="form-field form-center" key={i}>
              <RoundButton btnName={f[1]} />
            </div>
          )
        } else {

          inputType = f[0] === "email" ? "email" : "text";
          inputType = f[0] === "password" ? "password" : inputType;

          return (
            <div className="form-field" key={i}>
              <label> {f[1]} </label>
              <input
                type={inputType}
                name= {f[0]}
                required
                key={i}
                onChange={this.handleChange}
              />
            </div>
          )
        }
      });
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-field form-center">
              {error}
            <h3>
              {randomTitle}
            </h3>
          </div>
          {createForm}
        </form>
      </div>
    );
  }
};

export default FormLoginSignUp;
