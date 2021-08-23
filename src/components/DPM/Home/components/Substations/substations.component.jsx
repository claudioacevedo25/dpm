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
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./index.css";

const SubstationsComponent = (props) => {
  return (
    <Card className="subestations">
      <CardContent>
        <Paper>
          <TableContainer className="subestationsContainer">
            <Table
              stickyHeader
              className="subestationsContainer__table"
              aria-label="simple table"
            >
              <TableHead className="subestationsContainer__table__head">
                <TableRow>
                  <TableCell
                    className="subestationsContainer__table__head__item"
                    align="center"
                  >
                    Estado
                  </TableCell>
                  <TableCell
                    className="subestationsContainer__table__head__item"
                    align="center"
                  >
                    Nombre de subestación
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="subestationsContainer__table__body">
                {!!props.substations &&
                  props.substations.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell
                        className="subestationsContainer__table__body__item"
                        align="center"
                      >
                        <FiberManualRecordIcon
                          className={`subestationsContainer__table__body__item__icon ${
                            !!row.is_fail ? "icon--notFail" : "icon--isFail"
                          }`}
                        />
                      </TableCell>
                      <TableCell
                        className="subestationsContainer__table__body__item"
                        align="center"
                      >
                        {row.name}
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

export default SubstationsComponent;
