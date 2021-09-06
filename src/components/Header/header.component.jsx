import React from "react";
import UserAvatar from "./components/UserAvatar";
import Alarm from "./components/Alarm";
import Instances from "../DPM/Instances";
import "./index.css";

const HeaderComponent = ({ user }) => {
  return (
    <div className="header">
      <Alarm />
      <Instances />
      <UserAvatar user={user} />
    </div>
  );
};

export default HeaderComponent;
