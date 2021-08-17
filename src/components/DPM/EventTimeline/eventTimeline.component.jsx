import React, { useState } from "react";
import { Typography, TextField, InputAdornment } from "@material-ui/core";
import { Search, FilterList } from "@material-ui/icons";
import DateSelector from "./components/DateSelector";
import "./index.css";

const EventTimelineComponent = (props) => {
  const [activeDay, setActiveDay] = useState(new Date().getDate());
  const onDayChange = async (day) => {
    setActiveDay(day);
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
      <DateSelector
        month={8}
        year={2021}
        onDayChange={onDayChange}
        activeDay={activeDay}
      />
    </div>
  );
};

export default EventTimelineComponent;
