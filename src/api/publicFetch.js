import axios from "axios";
import { httpRequestsValues, REFRESH, DPM } from "../constants/api.constants";

const { POST, DELETE, GET, PUT } = httpRequestsValues;

const instance = localStorage.getItem("dpm");

const backendURL = (api) => {
  const platform = process.env.REACT_APP_PLATFORM_BACKEND_URL;
  const dpm = process.env.REACT_APP_DPM_BACKEND_URL + JSON.parse(instance).id;
  return api === DPM ? dpm : platform;
};

const actionFnIsOk = (action) =>
  action === GET || action === POST || action === PUT || action === DELETE;
/**
 *
 * @param {"get, post, put, delete"} action
 * @param {"resource path"} endpoint
 * @param {"the object data"} params
 * @returns Promise pattern
 */
const genericHttpRequest = async (
  action,
  endpoint,
  params = {},
  apiSelection
) => {
  const endpointIsOk = !!endpoint && typeof endpoint === "string";
  let user = sessionStorage.getItem("user");
  const headers = !!user && {
    Authorization: "Bearer " + JSON.parse(user).access,
  };
  const actionIsOk = actionFnIsOk(action);
  const paramsOk = endpointIsOk && actionIsOk;
  let publicFetch = axios.create({
    baseURL: backendURL(apiSelection),
    headers,
  });
  const paramsByAction = (action) => {
    switch (action) {
      case GET:
        return { params };
      case POST:
        return params;

      default:
        return params;
    }
  };

  const loginRefresh = async () => {
    const params = { refresh: JSON.parse(user).refresh };
    try {
      const { data } = await axios.post(
        backendURL("PLATFORM") + REFRESH,
        params
      );
      const newUser = {
        ...JSON.parse(user),
        access: data.access,
      };
      sessionStorage.setItem("user", JSON.stringify(newUser));
      const headers = {
        Authorization: "Bearer " + newUser.access,
      };
      publicFetch = axios.create({
        baseURL: backendURL(apiSelection),
        headers,
      });
    } catch (error) {
      sessionStorage.removeItem("user");
      window.location.href = "/login";
    }
  };

  if (paramsOk) {
    try {
      const { data } = await publicFetch[action](
        endpoint,
        paramsByAction(action)
      );
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        await loginRefresh();
        const { data } = await publicFetch[action](
          endpoint,
          paramsByAction(action)
        );
        return data;
      }
      throw error;
    }
  }
  throw new Error(`The method ${action} is not valid at endpoint ${endpoint}`);
};
export { genericHttpRequest };
