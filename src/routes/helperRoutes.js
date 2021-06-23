import { Route, Redirect } from "react-router-dom";
import path from "../constants/paths.constants";

/* TODO: Update when authentication service is available
/**
 *Create a private route
 * @returns {component, options } param
 */

export const PrivateRoute = ({ component, ...options }) => {
  const isAuth = false;
  if (isAuth) {
    return <Route {...options} component={component} />;
  }
  return <Redirect to={path.public.login} />;
};

/**
 *Create a public route
 * @returns {component, options } param
 */

export const PublicRoute = ({ component, ...options }) => {
  const isAuth = false;
  if (!isAuth) {
    return <Route {...options} component={component} />;
  }
  return <Redirect to={path.public.login} />;
};
