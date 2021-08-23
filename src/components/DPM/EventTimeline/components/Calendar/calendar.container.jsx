import React from "react";
import CalendarComponent from "./calendar.component";

const Calendar = ({ onDateClick }) => {
  return <CalendarComponent onDateClick={onDateClick} />;
};

export default Calendar;
