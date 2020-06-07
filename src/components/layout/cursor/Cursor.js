import React, { useEffect, useRef } from "react";
import "./Cursor.css";

const Cursor = () => {
  const cursorDot = useRef();

  const onMouseMove = (e) => {
    let posX = e.pageX;
    let posY = e.pageY;
    cursorDot.current.style.left = `${posX}px`;
    cursorDot.current.style.top = `${posY}px`;
  };
  requestAnimationFrame(onMouseMove);

  const onMouseLeave = () => {
    cursorDot.current.style.opacity = 0;
  };
  const onMouseEnter = () => {
    cursorDot.current.style.opacity = 1;
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return <div ref={cursorDot} className="cursor-custom"></div>;
};

export default Cursor;
