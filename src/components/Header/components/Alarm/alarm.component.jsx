import React, { useState } from "react";
import { Popover, Typography, Card, CardContent } from "@material-ui/core";
import { ErrorOutlined } from "@material-ui/icons";
import moment from "moment";
import Spinner from "../../../../reusable/Spinner";
import "./index.css";

const AlarmComponent = ({ handleEvents }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [events, setEvents] = useState([]);

  const handleInstances = async (event) => {
    setAnchorEl(event.currentTarget);
    const data = await handleEvents(0, 200);
    setEvents(data.data);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <div className="alarm">
      <ErrorOutlined className="alarm__icon" onClick={handleInstances} />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Card className="alarm__container">
          <Typography className="alarm__container__title">Alarma</Typography>
          <CardContent className="alarm__container__profile">
            {events.length > 0 ? (
              events.map((event, index) => (
                <div className="alarm__container__event">
                  <Typography className="alarm__container__date">
                    {moment(event.date).format("DD/MM/YYYY HH:mm:ss")}
                  </Typography>
                  <Typography className="alarm__container__item">
                    - {event.substation}
                  </Typography>
                  <Typography className="alarm__container__item">
                    - {event.panio}
                  </Typography>
                  <Typography className="alarm__container__item">
                    - {event.relay}
                  </Typography>
                  <Typography className="alarm__container__item">
                    - {event.description}
                  </Typography>
                </div>
              ))
            ) : (
              <Spinner size="32px" />
            )}
          </CardContent>
        </Card>
      </Popover>
    </div>
  );
};

export default AlarmComponent;
