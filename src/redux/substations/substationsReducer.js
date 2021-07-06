import { GETSUBSTATION } from "./substationsTypes";

const initialState = {
  substations: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETSUBSTATION:
      return {
        substations: action.payload.substation,
      };

    default:
      return state;
  }
};

export default authReducer;
