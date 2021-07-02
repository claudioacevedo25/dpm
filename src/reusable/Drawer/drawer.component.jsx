import React from "react";
import { withRouter } from "react-router-dom";
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
import paths from "../../constants/paths.constants";
import logoDPM from "../../assets/images/LogoDPM.png";
import "./index.css";

const DrawerComponent = (props) => {
  const { history } = props;
  const path = window.location.pathname;

  const listItem = [
    {
      text: "Inicio",
      icon: <HomeOutlined />,
      href: paths.private.home,
      onclick: () => history.push(paths.private.home),
    },
    {
      text: "IED",
      icon: <GroupWorkRounded />,
      href: paths.private.ide,
      onclick: () => history.push(paths.private.ide),
    },
    {
      text: "Backup",
      icon: <BackupOutlined />,
      href: paths.private.backup,
      onclick: () => history.push(paths.private.backup),
    },
    {
      text: "Event timeline",
      icon: <TimelineOutlined />,
      href: paths.private.eventTimeline,
      onclick: () => history.push(paths.private.eventTimeline),
    },
  ];

  return (
    <>
      <Drawer open={true} variant="permanent" className="drawer">
        <div className="drawer__header">
          <img className="drawer__header__logo" src={logoDPM} />
          <Typography className="drawer__header__title">DPM</Typography>
        </div>
        <List className="drawer__list">
          {listItem.map((item, index) => (
            <ListItem
              className="drawer__list__item"
              button
              key={item.text}
              onClick={item.onclick}
            >
              <div
                className={`drawer__list__item__button ${
                  !!item.href &&
                  path === item.href &&
                  "drawer__list__item__button--active"
                }`}
              >
                {!!item.icon && (
                  <ListItemIcon className="drawer__list__icon">
                    {item.icon}
                  </ListItemIcon>
                )}
                <ListItemText primary={item.text} />
              </div>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default withRouter(DrawerComponent);
