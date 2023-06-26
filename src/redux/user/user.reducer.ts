import { IAction, Mode } from "../../types";
import modeReducer from "../mode/mode.reducer";
import { IUser } from "../store.type";

const initialState = {
	mode: Mode.Initial,
};

const userReducer = (state: IUser = initialState, action: IAction) => ({
	mode: modeReducer(state.mode, action),
});

export default userReducer;
