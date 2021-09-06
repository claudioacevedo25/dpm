import React, { useState } from "react";
import { connect } from "react-redux";
import { updateAlert } from "../../redux/alert/alertActions";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
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
import Header from "../../components/Header";
import Alert from "../../reusable/Alert";
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

const DrawerComponent = ({ dispatchAlert, alert, ...props }) => {
  const { history } = props;
  const classes = useStyles();
  const [open] = useState(true);
  const [redirect, setRedirect] = useState({});
  const pathname = history.location.pathname.split("/", (1, 2));

  const onClickRedirect = (path) => {
    if (!alert.isAlert) {
      history.push(path);
    } else {
      const redirect = { path: path };
      setRedirect(redirect);
    }
  };

  const onClickFollow = (follow) => {
    if (follow) {
      history.push(redirect.path);
      setRedirect("");
      dispatchAlert({ isAlert: false });
    } else {
      setRedirect("");
    }
  };

  const listItem = [
    {
      text: "Inicio",
      value: "home",
      icon: <HomeOutlined />,
      href: paths.private.home,
      onclick: () => onClickRedirect(paths.private.home, 0),
    },
    {
      text: "IED",
      value: "ide",
      icon: <GroupWorkRounded />,
      href: paths.private.ide,
      onclick: () => onClickRedirect(paths.private.ide, 1),
    },
    {
      text: "Backup",
      value: "backup",
      icon: <BackupOutlined />,
      href: paths.private.backup,
      onclick: () => onClickRedirect(paths.private.backup, 2),
    },
    {
      text: "Event timeline",
      value: "eventTimeline",
      icon: <TimelineOutlined />,
      href: paths.private.eventTimeline,
      onclick: () => onClickRedirect(paths.private.eventTimeline, 3),
    },
  ];

  return (
    <div className={classes.root}>
      {!!redirect.path && (
        <Alert
          onClickFollow={onClickFollow}
          openDialogue={true}
          text={alert.message}
          agree={alert.agree}
          disagree={alert.disagree}
        />
      )}
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
          <img className="drawer__header__logo" alt="logoDPM" src={logoDPM} />
          <div>
            <Typography className="drawer__header__title">DPM</Typography>
            <Typography className="drawer__header__dpm">
              {JSON.parse(localStorage.getItem("dpm")).name}
            </Typography>
          </div>
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
                  pathname[1] === item.value &&
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

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAlert: (alert) => dispatch(updateAlert(alert)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DrawerComponent));
