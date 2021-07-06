import {
  UPDATESUBSTATION,
  UPDATEPANIO,
  UPDATERELAY,
} from "./substationStructureTypes";

const initialState = {
  substation: {
    id: "",
    name: "",
  },
  relay: {
    id: "",
    name: "",
  },
  panio: {
    id: "",
    name: "",
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATESUBSTATION:
      return {
        substation: action.payload.substation,
      };
    case UPDATEPANIO:
      return {
        ...state,
        panio: action.payload.panio,
      };
    case UPDATERELAY:
      return {
        ...state,
        relay: action.payload.relay,
      };
    default:
      return state;
  }
};

export default authReducer;
