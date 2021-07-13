import {
  UPDATESUBSTATION,
  UPDATEPANIO,
  UPDATERELAY,
} from "./substationStructureTypes";

const initialState = {
  substation: {},
  relay: {},
  panio: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATESUBSTATION:
      return {
        substation: action.payload.substation,
        panio: {},
        relay: {},
      };
    case UPDATEPANIO:
      return {
        ...state,
        relay: {},
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
