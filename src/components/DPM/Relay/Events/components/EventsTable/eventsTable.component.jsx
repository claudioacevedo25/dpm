import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import moment from "moment";
import "./index.css";

const EventsTableComponent = ({ listEvents }) => {
  return (
    <TableContainer component={Paper}>
      <Table className="eventsContainer__table" aria-label="simple table">
        <TableHead className="eventsContainer__table__head">
          <TableRow>
            <TableCell
              className="eventsContainer__table__head__item"
              align="left"
            >
              Descripción
            </TableCell>
            <TableCell
              className="eventsContainer__table__head__item"
              align="left"
            >
              Fecha IED
            </TableCell>
            <TableCell
              className="eventsContainer__table__head__item"
              align="left"
            >
              Fecha DPM
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="eventsContainer__table__body">
          {!!listEvents &&
            listEvents.map((row) => (
              <TableRow className="eventsContainer__table__row" key={row.id}>
                <TableCell
                  key={row.description}
                  className="eventsContainer__table__body__item"
                  align="left"
                >
                  {row.description}
                </TableCell>
                <TableCell
                  key={row.date}
                  className="eventsContainer__table__body__item"
                  align="left"
                >
                  {moment(row.date).format("DD/MM/YYYY hh:mm a")}
                </TableCell>
                <TableCell
                  key={row.date_created}
                  className="eventsContainer__table__body__item"
                  align="left"
                >
                  {moment(row.date_created).format("DD/MM/YYYY hh:mm a")}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventsTableComponent;
