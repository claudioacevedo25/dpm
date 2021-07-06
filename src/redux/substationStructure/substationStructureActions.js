import {
  UPDATESUBSTATION,
  UPDATEPANIO,
  UPDATERELAY,
} from "./substationStructureTypes";

export const updateSubstation = (substation) => {
  return {
    type: UPDATESUBSTATION,
    payload: {
      substation,
    },
  };
};

export const updatePanio = (panio) => {
  return {
    type: UPDATEPANIO,
    payload: {
      panio,
    },
  };
};

export const updateRelay = (relay) => {
  return {
    type: UPDATERELAY,
    payload: {
      relay,
    },
  };
};
