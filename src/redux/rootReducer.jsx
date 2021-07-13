import { combineReducers } from "redux";
import substationsReducer from "./substations/substationsReducer";
import substationStructureReducer from "./substationStructure/substationStructureReducer";
import paniosReducer from "./panios/paniosReducer";
import relaysReducer from "./relays/relaysReducer";

const rootReducer = combineReducers({
  substations: substationsReducer,
  substationSelected: substationStructureReducer,
  panios: paniosReducer,
  relays: relaysReducer,
});

export default rootReducer;
