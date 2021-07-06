import { genericHttpRequest } from "./publicFetch";
import {
  SUBSTATIONS,
  httpRequestsValues,
  dpm_API_URL,
} from "../constants/api.constants";

const { GET } = httpRequestsValues;
const API_URL = dpm_API_URL;

/**
 *
 * @param {"email and password are required"} data
 * @returns Return the Login User and the user's token
 */
export const substations = (data) =>
  genericHttpRequest(GET, SUBSTATIONS, data, API_URL);
