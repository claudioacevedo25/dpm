import React from "react";
import DateSelectorComponent from "./dateSelector.component";

const DateSelector = ({ month, year, onDayChange, activeDay }) => {
  return (
    <DateSelectorComponent
      month={month}
      year={year}
      onDayChange={onDayChange}
      activeDay={activeDay}
    />
  );
};

export default DateSelector;
