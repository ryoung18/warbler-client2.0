import React, { Component } from "react";
import RoundButton from "./RoundButton";
import { Link } from 'react-router-dom';
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [
        "Warbler"
      ],
      roundButton : [
        {
          btnName: 'Sign up ',
          url: '/signup'
        },
        {
          btnName: 'Log in',
          url: '/login'
        }
      ]
    }
  }

  render() {
    const title = this.state.title[0].split('').map((t, i) => {
      let charPos = i % 2 === 0 ? "charFront" : "charBack";
        return (<div className={charPos} key={i}>{t.toUpperCase()}</div>)
      });

    const roundButton = this.state.roundButton.map((b,i) =>(
        <Link to={b.url} key={i} >
          <RoundButton btnName={b.btnName} key={i} />
          <span className="space"> &nbsp; </span>
        </Link>
      )
    );

    return (
      <div className="nav-container">
        <div className="center">
          <div className="nav-top">
            <div className="nav-half">
              &nbsp;
            </div>
            <div className="nav-half nav-right">
              {roundButton}
            </div>
          </div>
        </div>
          <div className="nav-title">
            <Link to="/">
              <img className="icon" src="/svg/duck-icon.svg" alt="ducky-icon" />
            </Link>
            {title}
          </div>
          <div className="nav-cat-btns">
            <div className="center">
              <Link to="/">All</Link>
              <Link to="/users/45">Kevin</Link>
              <Link to="/users/9">Jon</Link>
              <Link to="/">Me</Link>
              <Link to="/">Pikachu</Link>
            </div>
          </div>
      </div>
    );
  }
}
export default Nav;