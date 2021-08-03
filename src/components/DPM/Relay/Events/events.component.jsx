import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import EventsTable from "./components/EventsTable";
import Pagination from "../../../../reusable/Pagination";
import Spinner from "../../../../reusable/Spinner";
import "./index.css";

const EventsComponent = ({ getRelayIDEvents }) => {
  const [listEvents, setListEvents] = useState({});
  const [activePage, setActivePage] = useState(0);
  const size = 7;
  const totalPage = (total) => Math.ceil(total / size);
  useEffect(() => {
    onPageChange(0);
  }, []);

  const onPageChange = async (page) => {
    const listEvents = await getRelayIDEvents(page, size);
    setListEvents(listEvents);
    setActivePage(page);
  };

  return (
    <div className="events">
      <Typography className="events__title">Eventos Registrados</Typography>
      <div className="events__container">
        {listEvents.data ? (
          listEvents.data.length > 0 ? (
            <>
              <EventsTable listEvents={listEvents.data} />
              <Pagination
                totalPages={totalPage(listEvents.total)}
                onPageChange={onPageChange}
                activePage={activePage}
              />
            </>
          ) : (
            <Typography className="events__subtitle">No hay eventos</Typography>
          )
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default EventsComponent;