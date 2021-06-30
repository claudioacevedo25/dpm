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

const SubstationsComponent = () => {
  const rows = [
    {
      id: 924,
      name: "Substation1",
      lat: -241.42,
      lon: 92.32,
      is_fail: false,
    },
    {
      id: 925,
      name: "Substation2",
      lat: -240.42,
      lon: 91.32,
      is_fail: true,
    },
    {
      id: 926,
      name: "Substation3",
      lat: -242.42,
      lon: 90.32,
      is_fail: false,
    },
  ];

  return (
    <Card className="subestations">
      <CardContent className="subestationsContainer">
        <TableContainer component={Paper}>
          <Table
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
              {rows.map((row) => (
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
      </CardContent>
    </Card>
  );
};

export default SubstationsComponent;
