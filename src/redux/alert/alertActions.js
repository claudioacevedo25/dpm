import { UPDATEALERT } from "./alertTypes";

export const updateAlert = (alert) => {
  return {
    type: UPDATEALERT,
    payload: {
      alert,
    },
  };
};
