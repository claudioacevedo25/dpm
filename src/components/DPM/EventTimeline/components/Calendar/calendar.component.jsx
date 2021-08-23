import React, { useState, useEffect } from "react";
import { months } from "../../../../../constants/months.constants";
import DateSelector from "../DateSelector";
import "./index.css";

const CalendarComponent = ({ onDateClick }) => {
  const [activeDay, setActiveDay] = useState(new Date().getDate());
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
  const [activeYear, setActiveYear] = useState(new Date().getFullYear());
  const listYears = range(1950, new Date().getFullYear());
  let date = {
    day: activeDay,
    month: activeMonth,
    year: activeYear,
  };

  useEffect(() => {
    onDateClick(date);
  }, []);

  function range(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }

  const onDayChange = async (day) => {
    setActiveDay(day);
    date = {
      ...date,
      day: day,
    };
    onDateClick(date);
  };

  const onMonthChange = (event) => {
    date = {
      ...date,
      month: parseInt(event.target.value),
    };

    onDateClick(date);
    setActiveMonth(parseInt(event.target.value));
  };

  const onYearChange = (event) => {
    date = {
      ...date,
      year: parseInt(event.target.value),
    };
    onDateClick(date);

    setActiveYear(parseInt(event.target.value));
  };

  return (
    <div className="calendar">
      <select
        className="eventTimeline__select"
        value={activeMonth}
        onChange={onMonthChange}
      >
        {months.map((month, index) => (
          <option
            key={index}
            className="eventTimeline__select__item"
            value={month.id}
          >
            {month.name}
          </option>
        ))}
      </select>
      <select
        className="eventTimeline__select eventTimeline__select--year"
        value={activeYear}
        onChange={onYearChange}
      >
        {listYears.map((year, index) => (
          <option
            key={index}
            className="eventTimeline__select__item"
            value={year}
          >
            {year}
          </option>
        ))}
      </select>
      <DateSelector
        month={activeMonth}
        year={activeYear}
        onDayChange={onDayChange}
        activeDay={activeDay}
      />
    </div>
  );
};

export default CalendarComponent;
