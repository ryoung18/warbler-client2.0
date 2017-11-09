import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import User from "./User";
import FormLoginSignUp from "./FormLoginSignUp";
import Demo from "./Demo";
import Footer from "./Footer";

const App = () => (
  <div>
    <Header />
    <div className="fixed-center">
      <Route exact path="/" component={Main} />
      <Route exact path="/users/:id" component={User} />
      <Route exact path="/demo" component={Demo} />
      <Route exact path="/signup" component={FormLoginSignUp} />
      <Route exact path="/login" component={FormLoginSignUp} />
    </div>
    <Footer />
  </div>
);

export default App;
