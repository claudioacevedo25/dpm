import React from "react";
import { CircularProgress } from "@material-ui/core";
import "./index.css";

const SpinnerComponent = () => {
  return (
    <div className="home__substations__spinner">
      <CircularProgress size="55px" disableShrink />
    </div>
  );
};

export default SpinnerComponent;
