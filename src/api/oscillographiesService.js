import { genericHttpRequest } from "./publicFetch";
import {
  RELAYS,
  OSCILLOGRAPHIES,
  httpRequestsValues,
  dpm_API_URL,
} from "../constants/api.constants";

const { GET } = httpRequestsValues;
const API_URL = dpm_API_URL;

/**
 *
 * @param {"email and password are required"} data
 * @returns Get list of oscillographies in order.
 */
export const getOscillographies = (idRelay, page, size) => {
  const data = {
    page: page,
    page_size: size,
  };
  const RELAYOSCILLOGRAPHIES = RELAYS + idRelay + "/" + OSCILLOGRAPHIES;
  console.log("object :>> ", RELAYOSCILLOGRAPHIES);
  return genericHttpRequest(GET, RELAYOSCILLOGRAPHIES, data, API_URL);
};
