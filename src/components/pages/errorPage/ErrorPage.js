import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
import OnboardingButton from "../../layout/buttons/onboardingButton/OnboardingButton";
import { clearError } from "../../../redux/actions/errorActions";
import Cursor from "../../layout/cursor/Cursor";

class ErrorPage extends Component {

  // Om error te clearen in redux bij het verlaten van de errorpagina
  componentWillUnmount() {
    this.props.clearError();
  }

  render() {
    const { error } = this.props;

    return (
      <Fragment>
        <Cursor color="#83c0e6"/>
        <div className="errorpage-container">
          <h1 className="errorpage-container__title">
            {error ? error : "PAGE NOT FOUND"}
          </h1>
        </div>
        <Link to="/">
          <OnboardingButton>
            {/* Valse refresh van de app, keert gewoon terug naar landingpagina */}
            <p>Retry!</p>
          </OnboardingButton>
        </Link>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     clearError: () => dispatch({ type: CLEAR_ERROR }),
//   };
// };

export default connect(mapStateToProps, {clearError})(ErrorPage);
