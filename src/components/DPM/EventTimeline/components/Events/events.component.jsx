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
      onError("Ocurrio un error");
      setEvents(0);
    }
  };

  return (
    <>
      {events !== null ? (
        events.length > 0 ? (
          <Card className="eventsTimeline">
            <CardContent className="eventsTimeline__containerItems">
              <Paper>
                <TableContainer className="eventsTimelineContainer">
                  <Table
                    stickyHeader
                    className="eventsTimelineContainer__table"
                    aria-label="simple table"
                  >
                    <TableHead className="eventsTimelineContainer__table__head">
                      <TableRow>
                        <TableCell
                          className="eventsTimelineContainer__table__head__item"
                          align="left"
                        >
                          Nombre del evento
                        </TableCell>
                        <TableCell
                          className="eventsTimelineContainer__table__head__item"
                          align="left"
                        >
                          Nombre del rele
                        </TableCell>
                        <TableCell
                          className="eventsTimelineContainer__table__head__item"
                          align="left"
                        >
                          Hora
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className="eventsTimelineContainer__table__body">
                      {!!events &&
                        events.map((event) => (
                          <TableRow
                            className="eventsTimelineContainer__table__body__row"
                            key={event.id}
                          >
                            <TableCell
                              className="eventsTimelineContainer__table__body__item"
                              align="left"
                            >
                              {event.description}
                            </TableCell>
                            <TableCell
                              className="eventsTimelineContainer__table__body__item"
                              align="left"
                            >
                              {event.relay}
                            </TableCell>
                            <TableCell
                              className="eventsTimelineContainer__table__body__item"
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
          <Typography className="eventsTimeline__title">
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
