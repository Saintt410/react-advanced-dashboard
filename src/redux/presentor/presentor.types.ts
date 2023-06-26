export type Pdf = {
	id?: string;
	title?: string;
	url?: string;
	file?: File | string;
};

export enum PresentorActionType {
	PRESENT_PDF = "PRESENT_PDF",
	CLEAR_PDF = "CLEAR_PDF",
	RESET = "RESET",
}

export interface PresentorAction {
	type: PresentorActionType;
	payload?: Pdf | null;
}
