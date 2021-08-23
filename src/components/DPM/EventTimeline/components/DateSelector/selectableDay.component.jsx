import React from "react";
import { Button, Typography } from "@material-ui/core";
import "./index.css";

const DateSelectorComponent = ({ day, selected }) => {
  return (
    <Button className="selectableDay">
      <Typography>{day.name}</Typography>
      <Typography>{day.number}</Typography>
    </Button>
  );
};

export default DateSelectorComponent;
