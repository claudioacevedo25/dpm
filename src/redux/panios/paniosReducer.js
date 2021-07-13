import { GETPANIOS } from "./paniosTypes";

const initialState = [];

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETPANIOS:
      return action.payload.panios;

    default:
      return state;
  }
};

export default authReducer;
