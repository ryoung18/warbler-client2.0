import React, { Component } from "react";
import "./Warbler.css";

class Warbler extends Component {
  dateConverter (date) {
      const msgDate = new Date(date);
      let elapseTime = new Date() - msgDate;
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const dateCal = [ [3600000, 1000*60,  "Min"], [86400000,1000*60*60, "Hr"], [2629746000, 1000*60*60*24, "Day"] ];

      if ( elapseTime < 60000 ) return "Now";
      if ( elapseTime > 2629746000 ) {return `${monthNames[msgDate.getMonth()]} ${msgDate.getDate()}`}

      for(let i = 0; i <= dateCal.length; i++){
        if(dateCal[i][0] >= elapseTime ) {
          elapseTime = Math.floor(elapseTime/dateCal[i][1]);
          return`${elapseTime} ${dateCal[i][2]}${ elapseTime > 1 ? 's' : '' }`;
        }
      }
  }

  render() {
    const { name, handle, img, profile_img, message, time } = this.props;
    const dateConverted = this.dateConverter(time);
    const imgDiv = img ? (<div className="warbler-vid-img"> <img src={img}/> </div>) : "";
    const defaultProfileImg = profile_img === null ? "https://soft.cutesquishy.com/images/product_images/large_img/cute-small-yellow-chick-squishy-kawaii-charm-215139-1.jpg" : profile_img;

    return (
      <div className="warbler-container">

        {imgDiv}

        <div className="desc">
          <div className="account">
            <div className="user-image">
              <img src={defaultProfileImg} />
            </div>
            <div className="name">
              <span className="warbler-name"> {name} </span>
              <span className="warbler-handle"> {handle} </span>
            </div>
            <div className="time">
              {dateConverted}
            </div>
          </div>
          <div className="message">
            {message}
          </div>
          <div className="warbler-footer">
              <span className="action-btn" aria-label="message" role="img"> &#128172; </span>
              <span className="action-btn" aria-label="re-warble" role="img"> &#8645; </span>
              <span className="action-btn" aria-label="favorite" role="img"> &#9825; </span>
          </div>
        </div>

      </div>
    );
  }
}

export default Warbler;
