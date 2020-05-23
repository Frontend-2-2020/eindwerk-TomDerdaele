import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPage from "../pages/authPages/loginpage/LoginPage";
import LandingPage from "../pages/landingPage/LandingPage";
import NotFound from "../pages/notFound/NotFound";
import NavBar from "../navigatie/navBar/NavBar";
import RegisterPage from "../pages/authPages/registerpage/RegisterPage";


const OnboardingRoutes = () => {
  return (
    <div>
      <NavBar soort="auth" />
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" exact component={LandingPage} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
};

export default OnboardingRoutes;
