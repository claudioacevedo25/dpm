import React from "react";
import { getAllEvents } from "../../../../../api/eventsService";
import EventsComponent from "./events.component";

const Events = ({ date }) => {
  const handleEvents = async (from, to) => {
    const data = await getAllEvents(from, to, 0, 200);
    return data;
  };

  return <EventsComponent handleEvents={handleEvents} date={date} />;
};

export default Events;
