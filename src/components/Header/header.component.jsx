import React from "react";
import UserAvatar from "./components/UserAvatar";
import Alarm from "./components/Alarm";
import "./index.css";

const HeaderComponent = ({ user }) => {
  return (
    <div className="header">
      <Alarm />
      <UserAvatar user={user} />
    </div>
  );
};

export default HeaderComponent;
