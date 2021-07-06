import axios from "axios";
import { httpRequestsValues } from "../constants/api.constants";

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
  const user = sessionStorage.getItem("user");
  const headers = !!user && {
    Authorization: "Bearer " + JSON.parse(user).access,
  };
  const isHeaders = !!user ? { params, headers } : params;
  const actionIsOk = actionFnIsOk(action);
  const paramsOk = endpointIsOk && actionIsOk;
  const publicFetch = axios.create({
    baseURL: API_URL,
  });

  if (paramsOk) {
    try {
      const { data } = await publicFetch[action](endpoint, isHeaders);
      return data;
    } catch (error) {
      throw error;
    }
  }
  throw new Error(`The method ${action} is not valid at endpoint ${endpoint}`);
};
export { genericHttpRequest };
