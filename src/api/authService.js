import { genericHttpRequest } from "./publicFetch";
import {
  LOGIN,
  REFRESH,
  httpRequestsValues,
  platform_API_URL,
} from "../constants/api.constants";

const { POST } = httpRequestsValues;
const API_URL = platform_API_URL;

/**
 *
 * @param {"email and password are required"} data
 * @returns Return the Login User and the user's token
 */
export const login = (data) => genericHttpRequest(POST, LOGIN, data, API_URL);

export const refreshToken = (data) =>
  genericHttpRequest(POST, REFRESH, data, API_URL);
