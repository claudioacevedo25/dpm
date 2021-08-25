import React from "react";
import {
  AssignmentOutlined,
  ErrorOutlined,
  HistoryOutlined,
} from "@material-ui/icons";
import UserAvatar from "./components/UserAvatar";
import Alarm from "./components/Alarm";
import "./index.css";

const HeaderComponent = ({ user }) => {
  return (
    <div className="header">
      <AssignmentOutlined className="header__icon" />
      <Alarm />
      <HistoryOutlined className="header__icon" />
      <UserAvatar user={user} />
    </div>
  );
};

export default HeaderComponent;
