import React from "react";
import SpinnerComponent from "./spinner.component";

const Spinner = ({ description, size }) => {
  return <SpinnerComponent description={description} size={size} />;
};

export default Spinner;
