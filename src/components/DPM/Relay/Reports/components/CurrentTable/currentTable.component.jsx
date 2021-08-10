import React from "react";
import { Typography } from "@material-ui/core";
import moment from "moment";
import "./index.css";

const CurrentTableComponent = ({ listReports }) => {
  return (
    <div className="currentTable">
      <Typography className="currentTable__head"> Ajuste actual </Typography>

      <div className="currentTable__container">
        <Typography className="currentTable__container__name">
          {listReports.name}
        </Typography>
        <Typography className="currentTable__container__date">
          {moment(listReports.date).format("DD/MM/YYYY")}
        </Typography>
        <Typography className="currentTable__container__time">
          {moment(listReports.date).format("hh:mm a")}
        </Typography>
      </div>
    </div>
  );
};

export default CurrentTableComponent;
