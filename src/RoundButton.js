import React from "react";
import "./RoundButton.css";

const RoundButton = props => (
  <button className={`round-btn`} type="submit" value="Submit">
    {props.btnName}
  </button>
);

export default RoundButton;
