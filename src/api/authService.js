import { genericHttpRequest } from "./publicFetch";
import { LOGIN, httpRequestsValues } from "../constants/api.constants";

const { POST } = httpRequestsValues;

/**
 *
 * @param {"email and password are required"} data
 * @returns Return the Login User and the user's token
 */
export const login = (data) => genericHttpRequest(POST, LOGIN, data);
