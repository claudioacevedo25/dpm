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
import "./index.css";

const SelectableTableComponent = ({ onClickSelected, headers, rows }) => {
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
      <TableContainer className="selectableTable">
        <Table stickyHeader aria-label="customized table">
          <TableHead className="selectableTable__head">
            <TableRow>
              <TableCell key="checkbox"></TableCell>
              {headers.map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
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
                  <TableCell padding="checkbox">
                    <Checkbox
                      onClick={(event) => handleClick(event, row.id)}
                      disabled={row.is_reporter}
                      color="primary"
                      checked={isItemSelected || row.is_reporter}
                    />
                  </TableCell>
                  <TableCell>{row.mnemo}</TableCell>
                  <TableCell>{row.substation}</TableCell>
                  <TableCell>{row.panio}</TableCell>
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
