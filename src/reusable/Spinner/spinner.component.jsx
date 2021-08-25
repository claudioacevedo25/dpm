import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import "./index.css";

const SpinnerComponent = ({ description, size = "55px" }) => {
  return (
    <div className="spinner">
      <CircularProgress size={size} disableShrink />
      {!!description && (
        <Typography className="spinner__description">{description}</Typography>
      )}
    </div>
  );
};

export default SpinnerComponent;
