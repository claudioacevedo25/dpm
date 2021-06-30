import { Switch, Redirect, Route } from "react-router-dom";
import { PrivateRoute } from "./helperRoutes";
import path from "../constants/paths.constants";
import Drawer from "../reusable/Drawer";
import Header from "../reusable/Header";
import Home from "../components/DPM/Home";

/**
 * Return private routes
 * [ These routes have to have a valid token]
 * @param {*} props
 * @returns
 */

const PrivateRoutes = (props) => {
  return (
    <>
      <Drawer />
      {/* <Header /> */}
      <Switch>
        <PrivateRoute exact path={path.private.home} component={Home} />
        <Route
          exact
          path="*"
          render={() => {
            return <Redirect to={path.private.home} />;
          }}
        />
      </Switch>
    </>
  );
};

export default PrivateRoutes;
