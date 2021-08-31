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
import { TimelineOutlined } from "@material-ui/icons";
import moment from "moment";
import "./index.css";

const SelectableTableComponent = ({
  onClickSelected,
  listOscillographies,
  onClickOscillography,
}) => {
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
      <TableContainer className="selectableTable__oscillography">
        <Table stickyHeader aria-label="customized table">
          <TableHead className="selectableTable__head">
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Hora</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {listOscillographies.map((row) => {
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
                  <TableCell>
                    <Checkbox
                      onClick={(event) => handleClick(event, row.id)}
                      color="primary"
                      checked={isItemSelected || false}
                    />
                    {row.name}
                  </TableCell>
                  <TableCell>{moment(row.date).format("DD/MM/YYYY")}</TableCell>
                  <TableCell>{moment(row.date).format("hh:mm a")}</TableCell>
                  <TableCell className="selectableTable__item__icon">
                    <TimelineOutlined
                      onClick={() => onClickOscillography(row)}
                    />
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
