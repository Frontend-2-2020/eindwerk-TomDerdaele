import React from "react";
import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import TextareaAutosize from "react-textarea-autosize";

const BlabbleTextArea = (props) => {
  // const { type, name, placeHolder, className, values, height } = props;
  const { type, name, placeHolder, className } = props;

  // const emptyHeight = values[name] === "" ? { height: height } : null;

  // const autosize = ({ target }) => {
  //   setTimeout(() => {
  //     target.style.cssText = "height:" + (target.scrollHeight + 3) + "px";
  //   }, 0);
  // };

  return (
    <div className={className +"-input-wrapper"}>
      <Field id={name} {...props}>
        {({ field, meta }) => (
          <TextareaAutosize
            {...field}
            // style={emptyHeight}
            // onKeyDown={autosize}
            autoComplete="off"
            type={type}
            placeholder={placeHolder}
            className={
              className +
              (meta.touched && meta.error ? " " + className + "--error" : "")
            }
          />
        )}
      </Field>
      <ErrorMessage
        name={name}
        render={(msg) => <div className={className + "__feedback"}>{msg}</div>}
      />
    </div>
  );
};


BlabbleTextArea.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  values: PropTypes.object.isRequired,
  height: PropTypes.string.isRequired
};

export default BlabbleTextArea;
