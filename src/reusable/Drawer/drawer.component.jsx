import React from "react";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
} from "@material-ui/core";
import {
  HomeOutlined,
  GroupWorkRounded,
  BackupOutlined,
  TimelineOutlined,
  ChevronLeft,
  ChevronRight,
} from "@material-ui/icons";
import Header from "../Header";
import paths from "../../constants/paths.constants";
import logoDPM from "../../assets/images/LogoDPM.png";
import "./index.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

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
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        {/* Icono para abrir y cerrar el drawer, a implementar a futuro */}
        {/* <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div> */}
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
      <main className={classes.content}>
        <Header />
        {props.props.children}
      </main>
    </div>
  );
};

export default withRouter(DrawerComponent);
