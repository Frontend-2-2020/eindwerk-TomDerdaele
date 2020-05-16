import React, { Fragment } from "react";

import "./LandingPage.css";
import OnboardingButton from "../../onboarding/onboardingButton/OnboardingButton";

const LandingPage = () => {
  return (
    <Fragment>
      <OnboardingButton>
        <p>JOIN!</p>
      </OnboardingButton>
      <div className="landingpage-container">
        <h1 className="landingpage-container__title">
          Blab about <br /> anything!
        </h1>
        <p className="landingpage-container__tagline">
          Join for free and blab along with us…
        </p>
      </div>
    </Fragment>
  );
};


export default LandingPage;



