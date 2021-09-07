import { genericHttpRequest } from "./publicFetch";
import {
  RELAYS,
  OSCILLOGRAPHIES,
  DOWNLOAD_OSCILLOGRAPHIES,
  httpRequestsValues,
  REPORT,
  DPM,
} from "../constants/api.constants";

const { GET, POST } = httpRequestsValues;
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

export const downloadOscillographies = (id, listRelays) => {
  const relayByID = RELAYS + id + "/" + DOWNLOAD_OSCILLOGRAPHIES;
  const data = {
    oscillographies: listRelays,
  };
  return genericHttpRequest(POST, relayByID, data, apiSelection);
};

export const getOscillography = (idRelay, idOscillography) => {
  const data = "";
  const RELAYOSCILLOGRAPHIES =
    RELAYS + idRelay + "/" + OSCILLOGRAPHIES + idOscillography + "/";
  return genericHttpRequest(GET, RELAYOSCILLOGRAPHIES, data, apiSelection);
};

export const getGraphicsOscillography = (idRelay, idOscillography) => {
  const data = "";
  const GRAPHICSOSCILLOGRAPHY =
    RELAYS + idRelay + "/" + OSCILLOGRAPHIES + idOscillography + "/" + REPORT;
  return genericHttpRequest(GET, GRAPHICSOSCILLOGRAPHY, data, apiSelection);
};
