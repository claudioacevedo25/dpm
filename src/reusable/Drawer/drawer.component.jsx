import React from "react";
import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

const HomeComponent = () => {
  return (
    <Drawer className="containerHome">
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default HomeComponent;
