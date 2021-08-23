import { genericHttpRequest } from "./publicFetch";
import {
  RELAYS,
  EVENTS,
  httpRequestsValues,
  DPM,
} from "../constants/api.constants";

const { GET } = httpRequestsValues;
const apiSelection = DPM;

export const getEvents = (id, page, size) => {
  const relayByID = RELAYS + id + "/" + EVENTS;
  const data = {
    page: page,
    page_size: size,
  };
  return genericHttpRequest(GET, relayByID, data, apiSelection);
};

export const getAllEvents = (from, to, page, size) => {
  const data = {
    page: page,
    page_size: size,
    from: from,
    to: to,
  };
  return genericHttpRequest(GET, EVENTS, data, apiSelection);
};
