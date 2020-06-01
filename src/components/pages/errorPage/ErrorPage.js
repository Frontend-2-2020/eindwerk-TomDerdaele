import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { CLEAR_ERROR } from "../../../redux/actions/actionTypes";
import { Link } from "react-router-dom";

import "./ErrorPage.css";
import OnboardingButton from "../../layout/buttons/onboardingButton/OnboardingButton";

class ErrorPage extends Component {
  componentWillUnmount() {
    this.props.clearError();
  }

  render() {
    const { error } = this.props;

    return (
      <Fragment>
        <div className="errorpage-container">
          <h1 className="errorpage-container__title">
            {error ? error : "PAGE NOT FOUND"}
          </h1>
        </div>
        <Link to="/">
          <OnboardingButton>
            <p>retry!</p>
          </OnboardingButton>
        </Link>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => dispatch({ type: CLEAR_ERROR }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
