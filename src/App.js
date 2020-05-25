import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from "react-redux";
import { checkOnLoad } from "./redux/actions/authActions";

import "./stylesGlobal/normalize.css";
import "./stylesGlobal/reset.css";
import "./stylesGlobal/typoBasic.css";

import OnboardingRoutes from "./components/routing/OnboardingRoutes";
import PostsRoutes from "./components/routing/PostsRoutes";
import UserRoutes from "./components/routing/UserRoutes";


class App extends Component {

  componentDidMount(){
    this.props.checkOnLoad()
  }
  
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/user" component={UserRoutes} />
          <Route path="/posts" component={PostsRoutes} />
          <Route path="/" component={OnboardingRoutes} />
        </Switch>
      </Router>
    );
  }
}
export default connect(null, {checkOnLoad})(App);
