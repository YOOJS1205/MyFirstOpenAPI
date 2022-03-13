import { combineReducers } from "redux";
import loginReducer from "./Login";
import modalReducer from "./Modal";

const rootReducer = combineReducers({
    loginReducer,
    modalReducer
});

export default rootReducer;