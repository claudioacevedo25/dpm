import { genericHttpRequest } from "./publicFetch";
import {
  LOGIN,
  REFRESH,
  httpRequestsValues,
  PLATFORM,
} from "../constants/api.constants";

const { POST } = httpRequestsValues;
const apiSelection = PLATFORM;

/**
 *
 * @param {"email and password are required"} data
 * @returns Return the Login User and the user's token
 */
export const login = (data) =>
  genericHttpRequest(POST, LOGIN, data, apiSelection);

export const refreshToken = (data) =>
  genericHttpRequest(POST, REFRESH, data, apiSelection);
