import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import "./index.css";

const SpinnerComponent = ({ description }) => {
  return (
    <div className="spinner">
      <CircularProgress size="55px" disableShrink />
      {!!description && (
        <Typography className="spinner__description">{description}</Typography>
      )}
    </div>
  );
};

export default SpinnerComponent;
