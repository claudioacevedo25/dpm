import { genericHttpRequest } from "./publicFetch";
import {
  RELAYS,
  ALLRELAYS,
  BACKUP,
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

export const getRelayID = (id, data) => {
  const relayByID = RELAYS + id + "/";
  return genericHttpRequest(GET, relayByID, data, apiSelection);
};

export const backupRelays = (listRelays) => {
  const data = {
    relays: listRelays,
  };
  return genericHttpRequest(POST, BACKUP, data, apiSelection);
};
