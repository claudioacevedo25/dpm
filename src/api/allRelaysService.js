import { genericHttpRequest } from "./publicFetch";
import {
  ALLRELAYS,
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
export const allRelays = (page, size) => {
  const data = {
    page: page,
    page_size: size,
  };
  return genericHttpRequest(GET, ALLRELAYS, data, API_URL);
};
