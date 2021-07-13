import { genericHttpRequest } from "./publicFetch";
import {
  PANIOS,
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
export const panios = (data) => genericHttpRequest(GET, PANIOS, data, API_URL);
