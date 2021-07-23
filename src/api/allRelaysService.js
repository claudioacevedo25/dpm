import { genericHttpRequest } from "./publicFetch";
import { ALLRELAYS, httpRequestsValues, DPM } from "../constants/api.constants";

const { GET } = httpRequestsValues;
const apiSelection = DPM;

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
  return genericHttpRequest(GET, ALLRELAYS, data, apiSelection);
};
