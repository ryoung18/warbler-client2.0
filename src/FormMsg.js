import React, { Component } from "react";
import RoundButton from "./RoundButton";
import axios from "axios";
import { BASE_URL } from "./helpers";

class FormMsg extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "",
      img_url: "",
      test: ""
    }
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
    const newMsg = (({ message, img_url }) => ({ message, img_url  }))(this.state);
    const loc = this.props.loc.replace('users', 'warblers');
    axios.post(`${BASE_URL}${loc}`, newMsg)
  }


  render () {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-field" >
            <label> Message </label>
            <textarea type='text' name='message' rows="6" spellcheck="true" minlength="3" maxlength="144" required onChange={this.handleChange}/>
          </div>
          <div className="form-field" >
            <label> Image URL </label>
            <input className="message Input" type='text' name='img_url' onChange={this.handleChange}/>
          </div>
          <div className="form-field form-center">
              <RoundButton btnName='Submit'/>
          </div>
        </form>
      </div>
    );
  }
};

export default FormMsg;