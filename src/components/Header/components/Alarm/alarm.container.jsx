import React from "react";
import { getEventsAlert } from "../../../../api/eventsService";
import AlarmComponent from "./alarm.component";

const Alarm = ({}) => {
  const handleEvents = async () => {
    const data = await getEventsAlert(0, 200);
    return data;
  };

  return <AlarmComponent handleEvents={handleEvents} />;
};

export default Alarm;
