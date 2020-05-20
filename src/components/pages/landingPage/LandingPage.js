import React, { Fragment } from "react";

import "./LandingPage.css";
import OnboardingButton from "../../layout/buttons/onboardingButton/OnboardingButton";

const LandingPage = () => {
  return (
    <Fragment>
      <div className="landingpage-container">
        <h1 className="landingpage-container__title">
          Blab about <br /> anything!
        </h1>
        <p className="landingpage-container__tagline">
          Join for free and blab along with us…
        </p>
      </div>
      <OnboardingButton path="/login">
        <p>JOIN!</p>
      </OnboardingButton>
    </Fragment>
  );
};


export default LandingPage;



