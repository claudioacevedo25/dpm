import { GETRELAYS } from "./relaysTypes";

const initialState = [];

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETRELAYS:
      return action.payload.relays;

    default:
      return state;
  }
};

export default authReducer;
