import React from "react";
import { connect } from "react-redux";
import {
  updateSubstation,
  updatePanio,
  updateRelay,
} from "../../../../../redux/substationStructure/substationStructureActions";
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
  dispatchSubstation,
  dispatchPanio,
  dispatchRelay,
  ...props
}) => {
  const onChange = async (selected) => {
    switch (type) {
      case "substation":
        await getPanios(selected.id);
        return dispatchSubstation(selected);

      case "panio":
        await getRelays(selected.id);
        return dispatchPanio(selected);
      case "relay":
        return dispatchRelay(selected);

      default:
        return;
    }
  };

  return (
    <Card className="table">
      <CardContent className="tableContainer">
        <TableContainer component={Paper}>
          <Table className="tableContainer__table" aria-label="simple table">
            <TableHead className="tableContainer__table__head">
              <TableRow>
                <TableCell
                  className="tableContainer__table__head__item"
                  align="center"
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
                    className="tableContainer__table__body__item"
                    align="center"
                  >
                    {!!row.name ? row.name : row.mnemo}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSubstation: (substation) => dispatch(updateSubstation(substation)),
    dispatchPanio: (panio) => dispatch(updatePanio(panio)),
    dispatchRelay: (relay) => dispatch(updateRelay(relay)),
  };
};

export default connect(null, mapDispatchToProps)(TableComponent);
