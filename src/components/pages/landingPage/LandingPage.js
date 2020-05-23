import React, { Fragment } from "react";

import "./LandingPage.css";
import OnboardingButton from "../../layout/buttons/onboardingButton/OnboardingButton";
import { connect } from "react-redux";

const LandingPage = ({auth:{loggedIn}}) => {

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
        <p>{loggedIn ? "blab!" : "join!"}</p> 
      </OnboardingButton>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(LandingPage);



