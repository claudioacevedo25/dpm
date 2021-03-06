import { Switch, Redirect, Route } from "react-router-dom";
import { PrivateRoute } from "./helperRoutes";
import path from "../constants/paths.constants";
import Drawer from "../components/Drawer";
import Home from "../components/DPM/Home";
import IDE from "../components/DPM/IDE";
import BackUp from "../components/DPM/BackUp";
import Relay from "../components/DPM/Relay";
import EventTimeline from "../components/DPM/EventTimeline";

/**
 * Return private routes
 * [ These routes have to have a valid token]
 * @param {*} props
 * @returns
 */

const PrivateRoutes = (props) => {
  return (
    <Drawer>
      <Switch>
        <PrivateRoute exact path={path.private.home} component={Home} />
        <PrivateRoute exact path={path.private.ide} component={IDE} />
        <PrivateRoute exact path={path.private.backup} component={BackUp} />
        <PrivateRoute exact path={path.private.relay} component={Relay} />
        <PrivateRoute
          exact
          path={path.private.eventTimeline}
          component={EventTimeline}
        />
        <Route
          exact
          path="*"
          render={() => {
            return <Redirect to={path.private.home} />;
          }}
        />
      </Switch>
    </Drawer>
  );
};

export default PrivateRoutes;
