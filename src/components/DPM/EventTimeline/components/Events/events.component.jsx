import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import { useNotification } from "../../../../../hooks/notification";
import Spinner from "../../../../../reusable/Spinner";
import "./index.css";

const EventsComponent = ({ date, handleEvents }) => {
  const [events, setEvents] = useState(null);
  const { onError } = useNotification();

  useEffect(() => {
    getAllEvents(date.from, date.to);
  }, [date]);

  const getAllEvents = async (from, to) => {
    setEvents(null);
    try {
      const data = await handleEvents(from, to);
      setEvents(data.data);
    } catch (error) {
      onError(error);
    }
  };

  return (
    <>
      {events !== null ? (
        events.length > 0 ? (
          <Card className="events">
            <CardContent className="events__containerItems">
              <Paper>
                <TableContainer className="eventsContainer">
                  <Table
                    stickyHeader
                    className="eventsContainer__table"
                    aria-label="simple table"
                  >
                    <TableHead className="eventsContainer__table__head">
                      <TableRow>
                        <TableCell
                          className="eventsContainer__table__head__item"
                          align="left"
                        >
                          Nombre del evento
                        </TableCell>
                        <TableCell
                          className="eventsContainer__table__head__item"
                          align="left"
                        >
                          Nombre del rele
                        </TableCell>
                        <TableCell
                          className="eventsContainer__table__head__item"
                          align="left"
                        >
                          Hora
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className="eventsContainer__table__body">
                      {!!events &&
                        events.map((event) => (
                          <TableRow
                            className="eventsContainer__table__body__row"
                            key={event.id}
                          >
                            <TableCell
                              className="eventsContainer__table__body__item"
                              align="left"
                            >
                              {event.description}
                            </TableCell>
                            <TableCell
                              className="eventsContainer__table__body__item"
                              align="left"
                            >
                              {event.relay}
                            </TableCell>
                            <TableCell
                              className="eventsContainer__table__body__item"
                              align="left"
                            >
                              {moment(event.date).format("hh:mm a")}
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </CardContent>
          </Card>
        ) : (
          <Typography className="events__title">
            No hay eventos registrados
          </Typography>
        )
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default EventsComponent;
