import React, { Component } from "react";
import Warbler from "./Warbler";
import { BASE_URL } from "./helpers";
import FormMsg from "./FormMsg";
import { setAuthorizationToken } from "./setAuthorizationToken";
import axios from "axios";
import "./User.css";


class  User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warblers: [],
      name:'',
      user_id: '',
      username: '',
      profile_img: '',
      msg_count: ''
    }
  }

  componentDidMount() {
    this.getUserInfo()
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.location.pathname !== this.props.location.pathname){
      this.getUserInfo()
    }
  }

  getUserInfo () {
    let { pathname } = this.props.location
    axios.get(`${BASE_URL}${pathname}`).then(response => {
      const { id: user_id, name, username, profile_img, msg_count } = response.data;
      const warblers = response.data.msgs.map(u => {
        let { id: msg_id, created_at, img_url, message } = u;
        return {
          msg_id,
          created_at,
          img_url,
          message
        }
      })

      this.setState({warblers, name, user_id, username, profile_img, msg_count})
     });
  }

  render () {
    const {user_id, name, username, profile_img, msg_count} = this.state;
    const warbForm = this.props.location.pathname === `/users/${localStorage.user_id}` ?
      (<FormMsg loc={this.props.location.pathname}/>) : ''
    ;

    const userWarble = this.state.warblers.map((e,i) => {
      return  (<Warbler
          name={name}
          handle={username}
          profile_img={profile_img}
          img={e.img_url}
          message={e.message}
          time={e.created_at}
          key={e.msg_id} />)
      })

    return (
      <div className="userContainer">
        <div className="userLeft">
          <div className="sideContainer">
            <div className="userInfoContainer">

              <div className="blueBlock h100">
                <div className="profileImageContainer">
                  <img className="profileImage" src={profile_img} />
                </div>
                <div className="userName">
                  <h4> {name} </h4>
                  <h4> {username} </h4>
                </div>
              </div>

            </div>
            <div className="whiteBlock">
               <h3> Warbles <br />
                    {msg_count}
              </h3>
            </div>
          </div>
          {warbForm}
        </div>
        <div className="userMiddle">
          <h2>Latest Tweets</h2>
          <p> Fix issues : Message - 1. Display "sent" with set time out after submit. 2. Show new message on top of the warbler feed.. Image : 3. validate image before submit. 4. Refresh JWT.</p>
          {userWarble}
        </div>
        <div className="userRight1">
          <div className="sideContainer">
            <div className="userInfoContainer">
              <div className="blueBlock h30 mTn20">
                <h4> Followers </h4>
              </div>
            </div>
            <div className="whiteBlock">

            </div>
          </div>
          <div className="sideContainer">
            <div className="userInfoContainer">
              <div className="blueBlock h30">
                <h4> Following </h4>
              </div>
            </div>
            <div className="whiteBlock">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;