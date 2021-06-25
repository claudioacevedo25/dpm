import { Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "./helperRoutes";
import path from "../constants/paths.constants";
import DPMHome from "../components/DPM/DPMHome";

const PublicRoutes = () => {
  return (
    <Switch>
      <PublicRoute exact path={path.public.login} component={DPMHome} />
      <Redirect path="/**" to={path.public.login} />
    </Switch>
  );
};

export default PublicRoutes;
