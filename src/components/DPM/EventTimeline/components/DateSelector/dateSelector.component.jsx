import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import SelectableDay from "./selectableDay.component";
import "./index.css";

const DateSelectorComponent = ({ year, month, onDayChange, activeDay }) => {
  const [daysMonth, setDayMonth] = useState([]);
  const [daysView, setDaysView] = useState([]);

  const getDaysArray = () => {
    var names = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    var date = new Date(year, month, 1);
    var result = [];
    while (date.getMonth() === month) {
      const day = {
        number: date.getDate(),
        name: names[date.getDay()],
      };
      result.push(day);
      date.setDate(date.getDate() + 1);
    }
    setDayMonth(result);
  };

  function getDays(day, maxLength) {
    const totalDays = new Date(year, month, 0).getDate();

    if (maxLength < 5) {
      throw new Error("maxLength must be at least 5");
    }
    function range(start, end) {
      return Array.from(Array(end - start + 1), (_, i) => i + start);
    }
    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;

    if (totalDays > 1 && totalDays <= maxLength) {
      // no breaks in list

      return range(2, totalDays - 1);
    }
    if (day <= maxLength - sideWidth - 1 - rightWidth) {
      // no break on left of day
      return range(1, maxLength - sideWidth + 1);
    }
    if (day >= totalDays - sideWidth - 2 - rightWidth) {
      // no break on right of day
      return range(
        totalDays - sideWidth - 3 - rightWidth - leftWidth,
        totalDays
      );
    }
    // Breaks on both sides
    return range(day - 4, day + 4);
  }

  // getPages(totalDays, activePage, 6);

  const getDaysView = (day) => {
    onDayChange(day);
    const number = getDays(day, 10);
    setDaysView(number);
  };

  useEffect(() => {
    const number = getDays(activeDay, 10);
    getDaysArray();
    setDaysView(number);
  }, [month]);

  return (
    <div className="dateSelector">
      <Button
        className="Pagination__button"
        disabled={activeDay === 1}
        onClick={() => {
          getDaysView(activeDay - 1);
        }}
      >{`<`}</Button>
      {daysView.length > 0 &&
        daysView.map((day, index) => (
          <div
            key={daysMonth[day - 1].number}
            className={`${activeDay === day && "selectableDay__selected"}`}
            onClick={() => {
              getDaysView(day);
            }}
          >
            <SelectableDay
              key={daysMonth[day - 1].number}
              day={daysMonth[day - 1]}
              active={activeDay === day}
            />
          </div>
        ))}
      <Button
        disabled={activeDay === daysMonth.length}
        className="Pagination__button"
        onClick={() => {
          getDaysView(activeDay + 1);
        }}
      >{`>`}</Button>
    </div>
  );
};

export default DateSelectorComponent;
