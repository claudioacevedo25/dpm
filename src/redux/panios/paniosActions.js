import { GETPANIOS } from "./paniosTypes";

export const getPanios = (panios) => {
  return {
    type: GETPANIOS,
    payload: {
      panios,
    },
  };
};
