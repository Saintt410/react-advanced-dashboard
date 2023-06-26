import { IPresentor } from "../store.type";
import { PresentorAction, PresentorActionType } from "./presentor.types";

const initialState: IPresentor = {
	pdf: null,
};

export default function presentorReducer(
	state: IPresentor = initialState,
	action: PresentorAction
) {
	switch (action.type) {
		case PresentorActionType.PRESENT_PDF:
			if (!action.payload) return state;
			return {
				...state,
				pdf: action.payload,
			};

		case PresentorActionType.CLEAR_PDF:
			return {
				...state,
				pdf: null,
			};

		case PresentorActionType.RESET:
			return initialState;

		default:
			return state;
	}
}
