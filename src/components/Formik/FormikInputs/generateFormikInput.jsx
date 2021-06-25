import React from "react";
import { inputTypes } from "../../../constants/formikInputTypes.constants";

//Inputs
import TextInput from "./TextInput";

export const generateInput = (
  value,
  errors,
  touched,
  dispatch,
  setFieldValue,
  initialValues,
  inputType,
  index
) => {
  switch (value.inputType) {
    case inputTypes.TEXT:
      return (
        <TextInput
          value={value}
          errors={errors}
          touched={touched}
          inputType={inputType}
          key={`${index}-${inputType}`}
        />
      );
    default:
        return (
            <TextInput
              value={value}
              errors={errors}
              touched={touched}
              inputType={inputType}
              key={`${index}-${inputType}`}
            />
          );
  }
};
