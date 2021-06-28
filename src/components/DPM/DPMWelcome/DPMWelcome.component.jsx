import React from "react";
import Typography from "@material-ui/core/Typography";
import LoginPage from "../LoginPage";
import imageDPMHome from "../../../assets/images/DPMHome.png";
import logoDPM from "../../../assets/images/LogoDPM.png";
import "./index.css";

const DPMWelcomeComponent = () => {
  return (
    <div className="containerDPM">
      <div className="containerDPM__login">
        <div className="containerDPM__header">
          <img src={logoDPM} />
          <Typography className="containerDPM__header__title">
            ¡Bienvenido a DPM!
          </Typography>
        </div>
        <LoginPage />
      </div>
      <div className="containerDPM__image">
        <img src={imageDPMHome} />
      </div>
    </div>
  );
};

export default DPMWelcomeComponent;
