import { Switch, Redirect, Route } from "react-router-dom";
import { PublicRoute } from "./helperRoutes";
import path from "../constants/paths.constants";
import DPMWelcome from "../components/DPM/DPMWelcome";

const PublicRoutes = () => {
  return (
    <Switch>
      <PublicRoute exact path={path.public.login} component={DPMWelcome} />
      <Route
        exact
        path="*"
        render={() => {
          return <Redirect to={path.public.login} />;
        }}
      />
    </Switch>
  );
};

export default PublicRoutes;
