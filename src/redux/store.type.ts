import { Mode } from "../types";
import { Pdf } from "./presentor/presentor.types";

export interface IStore {
	user: IUser;
	presentor: IPresentor;
}

export interface IUser {
	id?: string;
	mode?: Mode;
}

export interface IPresentor {
	pdf: Pdf | null;
}
