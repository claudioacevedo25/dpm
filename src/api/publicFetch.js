import axios from "axios";
import {
  processenvREACT_APP_API_URL,
  httpRequestsValues,
} from "../constants/api.constants";

const { POST, DELETE, GET, PUT } = httpRequestsValues;

const publicFetch = axios.create({
  baseURL: processenvREACT_APP_API_URL,
});

const actionFnIsOk = (action) =>
  action === GET || action === POST || action === PUT || action === DELETE;
/**
 *
 * @param {"get, post, put, delete"} action
 * @param {"resource path"} endpoint
 * @param {"the object data"} params
 * @returns Promise pattern
 */
const genericHttpRequest = async (action, endpoint, params = {}) => {
  const endpointIsOk = !!endpoint && typeof endpoint === "string";
  const actionIsOk = actionFnIsOk(action);
  const paramsOk = endpointIsOk && actionIsOk;
  if (paramsOk) {
    try {
      const { data } = await publicFetch[action](endpoint, params);
      return data;
    } catch (error) {
      throw error;
    }
  }
  throw new Error(`The method ${action} is not valid at endpoint ${endpoint}`);
};
export { genericHttpRequest };
