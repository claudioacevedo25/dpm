import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField } from "formik-material-ui";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import "./index.css";

const TextInput = (props) => {
  const {
    inputName,
    inputPlaceholder,
    inputLabel,
    icon,
    inputMinLength,
    inputMaxLength,
    inputType = "text",
  } = props.value;
  const { errors, touched } = props;
  return (
    <div className="containerInput">
      <label htmlFor={inputName} className="containerInput__label">
        {inputLabel}
      </label>
      <Field
        id={inputName}
        className="containerInput__textField"
        component={TextField}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={icon} />
            </InputAdornment>
          ),
        }}
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
