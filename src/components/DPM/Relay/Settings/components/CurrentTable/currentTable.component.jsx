import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import "./index.css";

const CurrentTableComponent = ({ listSettings }) => {
  return (
    <div className="currentTable">
      <Typography className="currentTable__head"> Ajuste actual </Typography>

      <div className="currentTable__container">
        <Typography className="currentTable__container__name">
          {listSettings.name}
        </Typography>
        <Typography className="currentTable__container__date">
          {moment(listSettings.date).format("DD/MM/YYYY")}
        </Typography>
        <Typography className="currentTable__container__time">
          {moment(listSettings.date).format("hh:mm a")}
        </Typography>
      </div>
    </div>
  );
};

export default CurrentTableComponent;
