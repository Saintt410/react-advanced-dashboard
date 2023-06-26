import { IAction, Mode } from "../../types";
import { ModeActionType } from "./mode.types";

const modeReducer = (state = Mode.Initial, action: IAction) => {
	switch (action.type) {
		case ModeActionType.UPDATE_MODE:
			return action.payload;
		default:
			return state;
	}
};

export default modeReducer;
