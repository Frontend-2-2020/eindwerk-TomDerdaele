import React from "react";
import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";

const BlabbleInputField = (props) => {
  const { type, name, placeHolder, values, className, borderColor } = props;
  return (
    <div className={className + "__input-wrapper"}>
      <Field id={name} {...props}>
        {({ field, meta }) => (
          <input
            {...field}
            type={type}
            placeholder={placeHolder}
            autoComplete="off"
            className={
              className +
              (meta.touched && meta.error ? " " + className + "--error" : "")
            }
          />
        )}
      </Field>
      {/* Speciaal element dat evenlang is als inputValue, maakt stukje lijn onzichtbaar */}
      {/* Klein regexje om spaties en paswoord dots te vervangen */}
      <span className={className + "__input-highlight"} style={{borderColor: borderColor}}>
        {name === "password"
          ? values[name].replace(/./g, "•")
          : values[name].replace(/ /g, "\u00a0")}
      </span>
      <ErrorMessage
        name={name}
        render={(msg) => <div className={className + "__feedback"}>{msg}</div>}
      />
    </div>
  );
};

BlabbleInputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  values: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
};

export default BlabbleInputField;
