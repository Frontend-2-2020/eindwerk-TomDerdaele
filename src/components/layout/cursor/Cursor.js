import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import "./Cursor.css";
import cursorCircle from "./cursorCircle";

class Cursor extends Component {
  state = { width: window.innerWidth };

  cursorDot = React.createRef();
  canvas = React.createRef();

  // Alle onderstaande is om de positie van de Ref te tracken
  componentDidMount() {
    window.addEventListener("resize", this.updateSize);
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseleave", this.onMouseLeave);
    document.addEventListener("mouseenter", this.onMouseEnter);
    cursorCircle(this.canvas, this.props.color);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSize);
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseleave", this.onMouseLeave);
    document.removeEventListener("mouseenter", this.onMouseEnter);
    cursorCircle(this.canvas, this.props.color);
  }

  componentDidUpdate() {
    cursorCircle(this.canvas, this.props.color);
  }

  updateSize = () => {
    this.setState({ width: window.innerWidth });
  };

   onMouseMove = (e) => {
    let posX = e.pageX;
    let posY = e.pageY;
    this.cursorDot.current.style.left = `${posX}px`;
    this.cursorDot.current.style.top = `${posY}px`;
  };

  onMouseLeave = () => {
    this.cursorDot.current.style.opacity = 0;
    this.canvas.current.style.opacity = 0;
  };
  onMouseEnter = () => {
    this.cursorDot.current.style.opacity = 1;
    this.canvas.current.style.opacity = 1;
  };

  render() {
    return (
      <Fragment>
        <div ref={this.cursorDot} className="cursor2" style={{backgroundColor: this.props.colorSmall}}></div>
        <canvas ref={this.canvas} className="cursor--canvas"></canvas>
      </Fragment>
    );
  }
}

Cursor.propTypes = {
  color: PropTypes.string.isRequired,
  colorSmall: PropTypes.string,
};

export default Cursor;
