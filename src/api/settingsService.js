import { genericHttpRequest } from "./publicFetch";
import {
  RELAYS,
  DOWNLOAD_SETTINGS,
  SETTINGS,
  httpRequestsValues,
  DPM,
} from "../constants/api.constants";

const { GET, POST } = httpRequestsValues;
const apiSelection = DPM;

export const getSettings = (id, page, size) => {
  const relayByID = RELAYS + id + "/" + SETTINGS;
  const data = {
    page: page,
    page_size: size,
  };
  return genericHttpRequest(GET, relayByID, data, apiSelection);
};

export const downloadSettings = (id, listRelays) => {
  const relayByID = RELAYS + id + "/" + DOWNLOAD_SETTINGS;
  const data = {
    settings: listRelays,
  };
  return genericHttpRequest(POST, relayByID, data, apiSelection);
};

export const settingsFile = (id, data) => {
  const relayByID = RELAYS + id + "/" + SETTINGS;

  return genericHttpRequest(POST, relayByID, data, apiSelection);
};
