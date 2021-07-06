import React from "react";
import {
  AssignmentOutlined,
  ErrorOutlined,
  HistoryOutlined,
} from "@material-ui/icons";
import "./index.css";

const HeaderComponent = (user) => {
  return (
    <div className="header">
      <AssignmentOutlined className="header__icon" />
      <ErrorOutlined className="header__icon" />
      <HistoryOutlined className="header__icon" />
    </div>
  );
};

export default HeaderComponent;
