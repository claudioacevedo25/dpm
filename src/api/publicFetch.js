import axios from "axios";
import {
  httpRequestsValues,
  platform_API_URL,
  REFRESH,
} from "../constants/api.constants";

const { POST, DELETE, GET, PUT } = httpRequestsValues;

const actionFnIsOk = (action) =>
  action === GET || action === POST || action === PUT || action === DELETE;
/**
 *
 * @param {"get, post, put, delete"} action
 * @param {"resource path"} endpoint
 * @param {"the object data"} params
 * @returns Promise pattern
 */
const genericHttpRequest = async (action, endpoint, params = {}, API_URL) => {
  const endpointIsOk = !!endpoint && typeof endpoint === "string";
  let user = sessionStorage.getItem("user");
  const headers = !!user && {
    Authorization: "Bearer " + JSON.parse(user).access,
  };
  const actionIsOk = actionFnIsOk(action);
  const paramsOk = endpointIsOk && actionIsOk;
  const publicFetch = axios.create({
    baseURL: API_URL,
  });

  const loginRefresh = async () => {
    const params = { refresh: JSON.parse(user).refresh };
    try {
      const { data } = await axios.post(platform_API_URL + REFRESH, params);
      const newUser = {
        ...JSON.parse(user),
        access: data.access,
      };
      sessionStorage.setItem("user", JSON.stringify(newUser));
      return {
        Authorization: "Bearer " + newUser.access,
      };
    } catch (error) {
      sessionStorage.removeItem("user");
      window.location.href = "/login";
    }
  };

  if (paramsOk) {
    try {
      const { data } = await publicFetch[action](
        endpoint,
        !!user ? { params, headers } : params
      );
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        const headers = await loginRefresh();

        const { data } = await publicFetch[action](endpoint, {
          params,
          headers,
        });
        return data;
      }
      throw error;
    }
  }
  throw new Error(`The method ${action} is not valid at endpoint ${endpoint}`);
};
export { genericHttpRequest };
