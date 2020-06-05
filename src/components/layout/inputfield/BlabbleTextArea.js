import React from "react";
import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import TextareaAutosize from "react-textarea-autosize";

const BlabbleTextArea = (props) => {
  const { type, name, placeHolder, className } = props;

  // Custom Textarea die meegroeit met de tekst.

  return (
    <div className={className + "-input-wrapper"}>
      <Field id={name} {...props}>
        {({ field, meta }) => (
          <TextareaAutosize
            {...field}
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
  // values: PropTypes.object.isRequired,
  // height: PropTypes.string.isRequired
};

export default BlabbleTextArea;
