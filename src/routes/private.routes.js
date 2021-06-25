import { Switch } from "react-router-dom";
// import { PrivateRoute } from "./helperRoutes";
// import path from "../constants/paths.constants";
// import LoginPage from "../components/LoginPage";

/**
 * Return private routes
 * [ These routes have to have a valid token]
 * @param {*} props
 * @returns
 */

const PrivateRoutes = (props) => {
  return (
    <Switch>
      {/* <PrivateRoute exact path={path.public.login} component={LoginPage} />
      <Redirect path="/**" to={path.public.login} /> */}
    </Switch>
  );
};

export default PrivateRoutes;
