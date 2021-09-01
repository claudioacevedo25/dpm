import React, { useEffect } from "react";
import { Typography, TextField, InputAdornment } from "@material-ui/core";
import { Search, FilterList } from "@material-ui/icons";
import moment from "moment";
import Calendar from "./components/Calendar";
import Events from "./components/Events";
import "./index.css";
import { useState } from "react";

const EventTimelineComponent = () => {
  const [date, setDate] = useState(null);

  const onDateClick = (event) => {
    const currentDate = new Date(
      `${event.year}/${event.month + 1}/${event.day}`
    );
    new Date(currentDate.setDate(currentDate.getDate() + 1));
    const date = {
      from: event.day + "/" + (event.month + 1) + "/" + event.year,
      to: moment(currentDate).format("DD/MM/YYYY"),
    };
    setDate(date);
  };

  return (
    <div className="eventTimeline">
      <div className="eventTimeline__header">
        <Typography className="eventTimeline__title">Event Timeline</Typography>
        <div className="eventTimeline__header__contentSearch">
          <TextField
            className="eventTimeline__header__contentSearch__search"
            type="search"
            label="Buscar"
            disabled={true}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            type="search"
            label="Filtrar"
            disabled={true}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FilterList />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <div className="eventTimeline__calendar">
        <Calendar onDateClick={onDateClick} />
        {date !== null && <Events date={date} />}
      </div>
    </div>
  );
};

export default EventTimelineComponent;
