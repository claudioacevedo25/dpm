import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";

import "./index.css";

const AlertComponent = ({
  openDialogue,
  title,
  text,
  agree,
  disagree,
  onClickFollow,
}) => {
  const [open, setOpen] = React.useState(openDialogue);

  const handleClose = () => {
    onClickFollow(false);
    setOpen(false);
  };
  return (
    <Dialog
      className="alert"
      open={open}
      onClose={handleClose}
      aria-labelledby="draggable-dialog-title"
    >
      {!!title && (
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {title}
        </DialogTitle>
      )}
      <DialogContent>
        <DialogContentText className="alert__message">{text}</DialogContentText>
      </DialogContent>
      <DialogActions className="alert__actions">
        <Button
          className="alert__buttonAgree"
          variant="outlined"
          autoFocus
          onClick={() => onClickFollow(true)}
          color="primary"
        >
          {agree}
        </Button>
        <Button
          className="alert__buttonDisagree"
          variant="contained"
          onClick={handleClose}
          color="primary"
        >
          {disagree}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertComponent;
