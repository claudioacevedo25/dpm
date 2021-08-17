import React, { useState } from "react";
import {
  Avatar,
  Popover,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import "./index.css";

const UserAvatarComponent = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleInstances = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    window.location.href = "login";
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <div className="userAvatar">
      <Avatar
        className="userAvatar__icon"
        variant="rounded"
        src={user.profile_picture}
        alt={user.user}
        onClick={handleInstances}
      >
        {!user.profile_picture && user.user.charAt(0)}
      </Avatar>
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
          horizontal: "center",
        }}
      >
        <Card className="userAvatar__container">
          <CardContent className="userAvatar__container__profile">
            <Avatar
              className=" userAvatar__icon__avatar"
              variant="rounded"
              src={user.profile_picture}
              alt={user.user}
            >
              {!user.profile_picture && user.user.charAt(0)}
            </Avatar>
            <Typography className="userAvatar__container__name">
              {user.user}
            </Typography>
          </CardContent>
          <CardActions className="userAvatar__container__action">
            <Typography
              className="userAvatar__container__logout"
              onClick={() => handleLogout()}
            >
              Cerrar sesión
            </Typography>
          </CardActions>
        </Card>
      </Popover>
    </div>
  );
};

export default UserAvatarComponent;
