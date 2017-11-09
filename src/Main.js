import React from "react";
import Featured from "./Featured"
import "./Main.css";


const Main = () => (
  <div className="main">
    <div className="divider">
      <h3 className="dividerText"> - Featured Warbles - </h3>
    </div>
    <Featured />
  </div>
);

export default Main;