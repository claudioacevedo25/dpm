import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import substationsReducer from "./substations/substationsReducer";

const rootReducer = combineReducers({
  user: authReducer,
  substations: substationsReducer,
});

export default rootReducer;
