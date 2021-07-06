import { GETSUBSTATION } from "./substationsTypes";

export const getSubstation = (substation) => {
  return {
    type: GETSUBSTATION,
    payload: {
      substation,
    },
  };
};
