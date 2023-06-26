import { Mode } from "../../types";

export const updateMode = (mode: Mode) => ({
	type: "UPDATE_MODE",
	payload: mode,
});
