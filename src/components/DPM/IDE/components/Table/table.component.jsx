import React, { useState } from "react";
import { connect } from "react-redux";
import {
  updateSubstation,
  updatePanio,
  updateRelay,
} from "../../../../../redux/substationStructure/substationStructureActions";
import { getPanios as obtainPanios } from "../../../../../redux/panios/paniosActions";
import { getRelays as obtainRelays } from "../../../../../redux/relays/relaysActions";
import {
  Card,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import "./index.css";

const TableComponent = ({
  getPanios,
  getRelays,
  type,
  dispatchSelectedSubstation,
  dispatchSelectedPanio,
  dispatchSelectedRelay,
  dispatchnRelays,
  dispatchnPanios,
  ...props
}) => {
  const [selected, setSelected] = useState("");
  const onChange = async (selected) => {
    setSelected(selected.id);
    switch (type) {
      case "substation":
        dispatchnPanios([]);
        dispatchSelectedSubstation(selected);
        return await getPanios(selected.id);
      case "panio":
        dispatchnRelays([]);
        dispatchSelectedPanio(selected);
        return await getRelays(selected.id);
      case "relay":
        return dispatchSelectedRelay(selected);
      default:
        return;
    }
  };

  return (
    <Card className="table">
      <CardContent>
        <Paper>
          <TableContainer className="tableContainer">
            <Table
              stickyHeader
              className="tableContainer__table"
              aria-label="simple table"
            >
              <TableHead className="tableContainer__table__head">
                <TableRow>
                  <TableCell
                    className="tableContainer__table__head__item"
                    align="left"
                  >
                    {props.header}
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody className="tableContainer__table__body">
                {props.rows.map((row) => (
                  <TableRow onClick={() => onChange(row)} key={row.id}>
                    <TableCell
                      key={row.id}
                      className={`tableContainer__table__body__item ${
                        selected === row.id &&
                        "tableContainer__table__body--selected"
                      }`}
                      align="left"
                    >
                      {!!row.name ? row.name : row.mnemo}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </CardContent>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSelectedSubstation: (substation) =>
      dispatch(updateSubstation(substation)),
    dispatchSelectedPanio: (panio) => dispatch(updatePanio(panio)),
    dispatchSelectedRelay: (relay) => dispatch(updateRelay(relay)),
    dispatchnPanios: (panios) => dispatch(obtainPanios(panios)),
    dispatchnRelays: (relays) => dispatch(obtainRelays(relays)),
  };
};

export default connect(null, mapDispatchToProps)(TableComponent);
