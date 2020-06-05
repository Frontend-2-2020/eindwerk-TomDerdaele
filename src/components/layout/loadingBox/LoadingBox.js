import React, { Component } from "react";
import "./LoadingBox.css";
import { connect } from "react-redux";
import { clearError } from "../../../redux/actions/errorActions";

class LoadingBox extends Component {
  // Simpel maar herbruikbaar Loading component terwijl data wordt opgehaald

  componentWillUnmount() {
    this.props.clearError();
  }

  render() {
    return (
      <div className="loadingbox-container">
        <div className="loadingbox-container__text">
          {this.props.error ? this.props.error : "loading..."}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
});

export default connect(mapStateToProps, { clearError })(LoadingBox);
