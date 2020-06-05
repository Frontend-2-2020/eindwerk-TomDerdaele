import React, { Fragment } from "react";

import "./LandingPage.css";
import OnboardingButton from "../../layout/buttons/onboardingButton/OnboardingButton";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const LandingPage = ({ auth: { loggedIn, currentUser } }) => {
  return (
    <Fragment>
      <div className="landingpage-container">
        <h1 className="landingpage-container__title">
          {/* Blab about <br /> anything! */}
          Blab about anything!
        </h1>
        <p className="landingpage-container__tagline">
          {loggedIn
            ? "Hi " + currentUser.first_name + ", blable along with us!"
            : "Join for free and blable along with us…"}
        </p>
      </div>
      <Link to="/login">
        <OnboardingButton>
          <p>{loggedIn ? "Blable!" : "Join!"}</p>
        </OnboardingButton>
      </Link>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(LandingPage);
