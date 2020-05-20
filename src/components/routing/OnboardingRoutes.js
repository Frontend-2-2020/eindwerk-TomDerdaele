import React from "react";
import NavBarAuth from "../navigatie/navBar/NavBarAuth";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/authPages/LoginPage";
import LandingPage from "../pages/landingPage/LandingPage";
import NotFound from "../pages/notFound/NotFound";


const OnboardingRoutes = () => {
  return (
    <div>
      <NavBarAuth />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" exact component={LandingPage} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
};

export default OnboardingRoutes;
