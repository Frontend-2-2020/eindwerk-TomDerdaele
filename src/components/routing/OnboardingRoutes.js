import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPage from "../pages/authPages/LoginPage";
import LandingPage from "../pages/landingPage/LandingPage";
import NotFound from "../pages/notFound/NotFound";
import NavBar from "../navigatie/navBar/NavBar";


const OnboardingRoutes = () => {
  return (
    <div>
      <NavBar soort="auth" kleur="#26284A" />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" exact component={LandingPage} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
};

export default OnboardingRoutes;
