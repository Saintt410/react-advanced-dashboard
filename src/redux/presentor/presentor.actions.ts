import { Pdf, PresentorActionType } from "./presentor.types";

export const presentPdf = (pdf: Pdf) => ({
	type: PresentorActionType.PRESENT_PDF,
	payload: pdf,
});

export const clearPdf = () => ({
	type: PresentorActionType.CLEAR_PDF,
});

export const resetPresentor = () => ({
	type: PresentorActionType.RESET,
});
