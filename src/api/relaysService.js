import { genericHttpRequest } from "./publicFetch";
import { RELAYS, httpRequestsValues, DPM } from "../constants/api.constants";

const { GET } = httpRequestsValues;
const apiSelection = DPM;

/**
 *
 * @param {"email and password are required"} data
 * @returns Return the Login User and the user's token
 */
export const relays = (data) =>
  genericHttpRequest(GET, RELAYS, data, apiSelection);
