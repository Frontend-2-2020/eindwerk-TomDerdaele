import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/authPages/loginpage/LoginPage";
import LandingPage from "../pages/landingPage/LandingPage";
import NavBar from "../navigatie/navBar/NavBar";
import RegisterPage from "../pages/authPages/registerpage/RegisterPage";
import ErrorPage from "../pages/errorPage/ErrorPage";

const OnboardingRoutes = () => {
  // Afzonderlijke switch voor de verschillende navbar versies en soon to be animated routes.
  return (
    <div>
      <NavBar soort="auth" />
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" exact component={LandingPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default OnboardingRoutes;
