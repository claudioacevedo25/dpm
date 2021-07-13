import { GETRELAYS } from "./relaysTypes";

export const getRelays = (relays) => {
  return {
    type: GETRELAYS,
    payload: {
      relays,
    },
  };
};
