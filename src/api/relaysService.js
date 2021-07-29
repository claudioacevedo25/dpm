import { genericHttpRequest } from "./publicFetch";
import {
  RELAYS,
  ALLRELAYS,
  EVENTS,
  BACKUP,
  httpRequestsValues,
  DPM,
} from "../constants/api.constants";

const { GET, POST } = httpRequestsValues;
const apiSelection = DPM;

/**
 *
 * @param {"email and password are required"} data
 * @returns Return the Login User and the user's token
 */
export const getRelays = (data) =>
  genericHttpRequest(GET, RELAYS, data, apiSelection);

export const allRelays = (page, size) => {
  const data = {
    page: page,
    page_size: size,
  };
  return genericHttpRequest(GET, ALLRELAYS, data, apiSelection);
};

export const getRelay = (id, data) => {
  const relayByID = RELAYS + id + "/";
  return genericHttpRequest(GET, relayByID, data, apiSelection);
};

export const getRelayEvents = (id, page, size) => {
  const relayByID = RELAYS + id + "/" + EVENTS;
  const data = {
    page: page,
    page_size: size,
  };
  return genericHttpRequest(GET, relayByID, data, apiSelection);
};

export const backupRelays = (data) =>
  genericHttpRequest(POST, BACKUP, data, apiSelection);
