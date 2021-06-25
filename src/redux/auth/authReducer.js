import { LOGIN, LOGOUT } from "./authTypes";

const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
    role_id: "",
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("user", action.payload.user);
      return {
        ...state,
        user: action.payload.user,
      };
    case LOGOUT:
      localStorage.removeItem("user");
      return {
        ...state,
        user: "",
      };
    default:
      return state;
  }
};

export default authReducer;
