import { genericHttpRequest } from "./publicFetch";
import {
  SUBSTATIONS,
  httpRequestsValues,
  DPM,
} from "../constants/api.constants";

const { GET } = httpRequestsValues;
const apiSelection = DPM;

/**
 *
 * @param {"email and password are required"} data
 * @returns Return the Login User and the user's token
 */
export const substations = (data) =>
  genericHttpRequest(GET, SUBSTATIONS, data, apiSelection);
