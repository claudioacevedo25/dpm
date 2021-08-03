import { genericHttpRequest } from "./publicFetch";
import {
  RELAYS,
  ALLRELAYS,
  EVENTS,
  BACKUP,
  OSCILLOGRAPHIES,
  DOWNLOAD,
  httpRequestsValues,
  DPM,
} from "../constants/api.constants";

const { GET, POST } = httpRequestsValues;
const apiSelection = DPM;

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

export const backupRelays = (listRelays) => {
  const data = {
    relays: listRelays,
  };
  return genericHttpRequest(POST, BACKUP, data, apiSelection);
};

export const getRelayOscillographies = (id, page, size) => {
  const relayByID = RELAYS + id + "/" + OSCILLOGRAPHIES;
  const data = {
    page: page,
    page_size: size,
  };
  return genericHttpRequest(GET, relayByID, data, apiSelection);
};

export const downloadRelayOscillographies = (id, listRelays) => {
  const relayByID = RELAYS + id + "/" + DOWNLOAD;
  const data = {
    oscillographies: listRelays,
  };
  return genericHttpRequest(POST, relayByID, data, apiSelection);
};
