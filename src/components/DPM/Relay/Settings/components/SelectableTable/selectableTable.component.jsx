import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
} from "@material-ui/core";
import moment from "moment";
import "./index.css";

const SelectableTableComponent = ({ onClickSelected, listSettings }) => {
  const [selected, setSelected] = useState([]);

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
    onClickSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <Paper>
      <TableContainer className="selectableTable__setting">
        <Table stickyHeader aria-label="customized table">
          <TableHead className="selectableTable__head">
            <TableRow>
              <TableCell>Superado</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Hora</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listSettings.map((row) => {
              const isItemSelected = isSelected(row.id);
              return (
                <TableRow
                  hover
                  role="checkbox"
                  className="selectableTable__row"
                  key={row.id}
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                >
                  <TableCell className="selectableTable__row__name">
                    <Checkbox
                      onClick={(event) => handleClick(event, row.id)}
                      color="primary"
                      checked={isItemSelected || false}
                    />
                    {row.name}
                  </TableCell>
                  <TableCell className="selectableTable__row__date">
                    {moment(row.date).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell className="selectableTable__row__time">
                    {moment(row.date).format("hh:mm a")}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default SelectableTableComponent;
