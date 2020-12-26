import { combineReducers } from "redux";

import ActivityReducer from "./ActivityReducer";

const RootReducer = combineReducers({
    data:ActivityReducer
});

export default RootReducer;