import React from "react";
import { getEvents } from "../../../../api/eventsService";
import EventsComponent from "./events.component";

const Events = ({ relayID }) => {
  const getRelayIDEvents = async (page = 0, size) => {
    const data = await getEvents(relayID, page, size);
    return data;
  };

  return <EventsComponent getRelayIDEvents={getRelayIDEvents} />;
};

export default Events;
