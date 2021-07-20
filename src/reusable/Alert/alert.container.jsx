import React from "react";
import AlertComponent from "./alert.component";

const Alert = ({
  openDialogue,
  title,
  text,
  agree,
  disagree,
  onClickFollow,
}) => {
  return (
    <AlertComponent
      openDialogue={openDialogue}
      title={title}
      text={text}
      agree={agree}
      disagree={disagree}
      onClickFollow={onClickFollow}
    />
  );
};

export default Alert;
