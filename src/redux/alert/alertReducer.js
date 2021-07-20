import { UPDATEALERT } from "./alertTypes";

const initialState = {
  isAlert: false,
  message: "",
  title: "",
  agree: "",
  disagree: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATEALERT:
      return action.payload.alert;

    default:
      return state;
  }
};

export default authReducer;
