import React from "react";
import { getRelayEvents } from "../../../../api/relaysService";
import EventsComponent from "./events.component";

const Events = ({ relayID }) => {
  const getRelayIDEvents = async (page = 0, size) => {
    try {
      const data = await getRelayEvents(relayID, page, size);
      return data;
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  return <EventsComponent getRelayIDEvents={getRelayIDEvents} />;
};

export default Events;
