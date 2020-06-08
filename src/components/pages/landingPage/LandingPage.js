import React, { Fragment } from "react";
import "./LandingPage.css";
import OnboardingButton from "../../layout/buttons/onboardingButton/OnboardingButton";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = ({ auth: { loggedIn, currentUser } }) => {

  const landingVariants = {
    initial: { opacity: 0, y: "100vh" },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: "100vh" },
  };

  const landingTransitions = {
    type: "spring",
    mass: 0.8
  };

  return (
    <Fragment>
      <div className="landingpage-container">
      <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={landingVariants}
          transition={landingTransitions}
        >
          <h1 className="landingpage-container__title">Blab about anything!</h1>
        </motion.div>
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
