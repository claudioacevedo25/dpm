import {
  UPDATESUBSTATION,
  UPDATEPANIO,
  UPDATERELAY,
  RECOVERSELECTION
} from "./substationStructureTypes";

const initialState = {
  backup: null,
  substation: {},
  relay: {},
  panio: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATESUBSTATION:
      return {
        backup: { 
          substation: state.substation,
          panio: state.panio,
          relay: state.relay },
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
    case RECOVERSELECTION:
      return {
        backup: null,
        substation: state.backup.substation,
        panio: state.backup.panio,
        relay: state.backup.relay
      }
    default:
      return state;
  }
};

export default authReducer;
