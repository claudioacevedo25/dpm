import React from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
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
              <img alt="icon" src={icon} />
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
    </div>
  );
};

export default TextInput;
