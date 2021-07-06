import React from "react";
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
import { connect } from "react-redux";
import {
  updateSubstation,
  updatePanio,
  updateRelay,
} from "../../../../../redux/substationStructure/substationStructureActions";
import "./index.css";

const TableComponent = (
  rows,
  header,
  updateSubstation,
  updatePanio,
  updateRelay
) => {
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
                  {header}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableContainer__table__body">
              {rows.map((row) => (
                <TableRow key={row}>
                  <TableCell
                    className="tableContainer__table__body__item"
                    align="center"
                  >
                    {row}
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

const mapDispatchToProps = {
  updateSubstation,
  updatePanio,
  updateRelay,
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatchNews: (news) => dispatch(newsType(news)),
//   };
// };

// const mapStateToProps = (state) => {
//   return {
//     news: state.news,
//   };
// };

export default connect(null, mapDispatchToProps)(TableComponent);
