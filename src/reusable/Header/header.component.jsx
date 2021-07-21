import React from "react";
import {
  AssignmentOutlined,
  ErrorOutlined,
  HistoryOutlined,
} from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import "./index.css";

const HeaderComponent = (user) => {
  return (
    <div className="header">
      <AssignmentOutlined className="header__icon" />
      <ErrorOutlined className="header__icon" />
      <HistoryOutlined className="header__icon" />
      <Avatar
        className="header__icon header__icon__avatar"
        variant="rounded"
        alt={user.user.user}
      >
        {user.user.user.charAt(0)}
      </Avatar>
    </div>
  );
};

export default HeaderComponent;
