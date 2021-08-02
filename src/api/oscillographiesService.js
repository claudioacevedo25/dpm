import { genericHttpRequest } from "./publicFetch";
import {
  RELAYS,
  OSCILLOGRAPHIES,
  httpRequestsValues,
  DPM,
} from "../constants/api.constants";

const { GET } = httpRequestsValues;
const apiSelection = DPM;

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
  return genericHttpRequest(GET, RELAYOSCILLOGRAPHIES, data, apiSelection);
};
