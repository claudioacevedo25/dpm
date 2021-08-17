import React from "react";
import {
  AssignmentOutlined,
  ErrorOutlined,
  HistoryOutlined,
} from "@material-ui/icons";
import UserAvatar from "../UserAvatar";
import "./index.css";

const HeaderComponent = ({ user }) => {
  return (
    <div className="header">
      <AssignmentOutlined className="header__icon" />
      <ErrorOutlined className="header__icon" />
      <HistoryOutlined className="header__icon" />
      <UserAvatar user={user} />
    </div>
  );
};

export default HeaderComponent;
