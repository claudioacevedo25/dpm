import React from "react";
import { getAllEvents } from "../../../api/eventsService";
import EventTimelineComponent from "./eventTimeline.component";

const EventTimeline = () => {
  const handleEvents = async (from, to) => {
    const data = await getAllEvents(from, to, 0, 200);
    return data;
  };

  return <EventTimelineComponent handleEvents={handleEvents} />;
};

export default EventTimeline;
