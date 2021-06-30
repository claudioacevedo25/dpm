import React from "react";
import logoDPM from "../../assets/images/LogoDPM.png";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import {
  HomeOutlined,
  GroupWorkRounded,
  BackupOutlined,
  TimelineOutlined,
} from "@material-ui/icons";
import Header from "../Header";
import "./index.css";

const HomeComponent = () => {
  const listItem = [
    { text: "Inicio", icon: <HomeOutlined /> },
    { text: "IED", icon: <GroupWorkRounded /> },
    { text: "Backup", icon: <BackupOutlined /> },
    { text: "Event timeline", icon: <TimelineOutlined /> },
  ];

  return (
    <>
      <Header />
      <Drawer open={true} variant="permanent" className="drawer">
        <div className="drawer__header">
          <img className="drawer__header__logo" src={logoDPM} />
          <Typography className="drawer__header__title">DPM</Typography>
        </div>
        <List className="drawer__list">
          {listItem.map((item, index) => (
            <ListItem className="drawer__list__item" button key={item.text}>
              {!!item.icon && (
                <ListItemIcon className="drawer__list__icon">
                  {item.icon}
                </ListItemIcon>
              )}
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default HomeComponent;
