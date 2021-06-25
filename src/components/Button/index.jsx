import React from "react";
import {Button as ButtonMaterial} from '@material-ui/core';
import "./index.css"

const Button = ({ textButton }) => {
  return (
    <div className="containerButton">
      <ButtonMaterial 
        type="submit"
        variant="contained"
        className="button"
      >
        {textButton}
      </ButtonMaterial >
    </div>
  );
};

export default Button;