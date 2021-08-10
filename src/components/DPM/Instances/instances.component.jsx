import React, { useState } from "react";
import { Popover, Typography, Card, CardContent } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import logoDPM from "../../../assets/images/LogoDPM.png";

import "./index.css";

const InstancesComponent = ({}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  let user = sessionStorage.getItem("user");

  const handleInstances = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelectedInstance = (instance) => {
    localStorage.setItem("dpm", JSON.stringify(instance));
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="instances">
      <img
        className="instances__logo"
        alt="logoDPM"
        src={logoDPM}
        onClick={handleInstances}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Card className="instances__container">
          <CardContent>
            <Typography className="instances__container__title">
              Instancias:
            </Typography>

            {JSON.parse(user).instances["DPM"].map((instance, index) => (
              <div className="instances__container__item">
                <FiberManualRecordIcon className="instances__container__item__icon" />
                <Typography
                  className="instances__container__item__name"
                  onClick={() => handleSelectedInstance(instance)}
                  key={instance.id}
                >
                  {instance.name}
                </Typography>
              </div>
            ))}
          </CardContent>
        </Card>
      </Popover>
    </div>
  );
};

export default InstancesComponent;
