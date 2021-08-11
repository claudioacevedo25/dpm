import { genericHttpRequest } from "./publicFetch";
import {
  RELAYS,
  DOWNLOAD_REPORTS,
  REPORTS,
  httpRequestsValues,
  DPM,
} from "../constants/api.constants";

const { GET, POST } = httpRequestsValues;
const apiSelection = DPM;

export const getReports = (id, page, size) => {
  const relayByID = RELAYS + id + "/" + REPORTS;
  const data = {
    page: page,
    page_size: size,
  };
  return genericHttpRequest(GET, relayByID, data, apiSelection);
};

export const downloadReports = (id, listRelays) => {
  const relayByID = RELAYS + id + "/" + DOWNLOAD_REPORTS;
  const data = {
    reports: listRelays,
  };
  return genericHttpRequest(POST, relayByID, data, apiSelection);
};

export const reportsFile = (id, data) => {
  const relayByID = RELAYS + id + "/" + REPORTS;

  return genericHttpRequest(POST, relayByID, data, apiSelection);
};
