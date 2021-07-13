import React from "react";
import { Button as ButtonMaterial } from "@material-ui/core";
import "./index.css";

const Button = ({ textButton, type, color, disabled = false }) => {
  return (
    <div className="containerButton">
      <ButtonMaterial
        disabled={disabled}
        style={color && { background: color }}
        type={type}
        variant="contained"
        className="button"
      >
        {textButton}
      </ButtonMaterial>
    </div>
  );
};

export default Button;
