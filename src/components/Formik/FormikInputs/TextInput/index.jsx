import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField } from 'formik-material-ui';
import "./index.css"

const TextInput = (props) => {
  const {
    inputName,
    inputPlaceholder,
    inputLabel,
    inputMinLength,
    inputMaxLength,
    inputType = "text",
  } = props.value;
  const { errors, touched } = props;
  return (
    <div
      className="containerInput"
    >
      <label htmlFor={inputName} className="containerInput__label">
        {inputLabel}
      </label>
      <Field
        id={inputName}
        className="containerInput__textField"
        component={TextField}
        variant="filled"
        name={inputName}
        placeholder={inputPlaceholder}
        type={inputType}
        minLength={inputMinLength}
        maxLength={inputMaxLength}
      />
      {/* <ErrorMessage name={inputName} component={InputError} /> */}
    </div>
  );
};

export default TextInput;
