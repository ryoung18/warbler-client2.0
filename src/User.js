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
      profile_img: ''
    }
  }

  componentDidMount() {
    let { pathname } = this.props.location
        // pathname = pathname.replace('users', 'warblers')
      // debugger
    axios.get(`${BASE_URL}${pathname}`).then(response => {
      const { id: user_id, name, username, profile_img } = response.data;

      const warblers = response.data.messages.map(u => {
        const { id: msg_id, created_at, img_url, message } = u;
        return {
          msg_id,
          created_at,
          img_url,
          message
        }
      })

      this.setState({warblers, name, user_id, username, profile_img})
     });
  }

  render () {
    const {user_id, name, username, profile_img} = this.state;
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

              <div className="halfblue">
                <div className="profileImageContainer">
                  <img className="profileImage" src={profile_img} />
                </div>
                <div className="userName">
                  <h4> {name} </h4>
                  <h4> {username} </h4>
                </div>
              </div>


            </div>
            <div className="warbs">
               <h3> Warbles <br />
                    20
              </h3>
            </div>
          </div>
          {warbForm}
        </div>
        <div className="usersMiddle">
          <h2>Latest Tweets</h2>
          {userWarble}
        </div>
        <div className="userRight">
          <div className="following">
            <div className="sideContainer">
                Following
            </div>
          </div>
          <div className="follower">
            <div className="sideContainer">
                Follower
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;