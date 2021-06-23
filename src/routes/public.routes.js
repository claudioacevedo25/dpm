import { Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "./helperRoutes";
import path from "../constants/paths.constants";
import LoginPage from "../components/LoginPage";

const PublicRoutes = () => {
  return (
    <Switch>
      <PublicRoute exact path={path.public.login} component={LoginPage} />
      <Redirect path="/**" to={path.public.login} />
    </Switch>
  );
};

export default PublicRoutes;
