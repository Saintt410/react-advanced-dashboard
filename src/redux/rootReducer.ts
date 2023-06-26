import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import { IStore } from "./store.type";
import presentorReducer from "./presentor/presentor.reducer";

const rootReducer = combineReducers<IStore>({
	user: userReducer,
	presentor: presentorReducer
});

export default rootReducer;
