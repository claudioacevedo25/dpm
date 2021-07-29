import React from "react";
import EventsTableComponent from "./eventsTable.component";

const EventsTable = ({ listEvents }) => {
  return <EventsTableComponent listEvents={listEvents} />;
};

export default EventsTable;
