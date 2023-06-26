export interface IAction {
	type: string;
	payload: any;
}

export enum Mode {
	Initial = "INITIAL",
	Media = "MEDIA",
	Pdf = "PDF",
	Whiteboard = "WHITEBOARD",
	Model = "MODEL",
	Simulation = "SIMULATION",
	Presentation = "PRESENTATION",
	ScreenShare = "SCREEN-SHARE",
}

export enum Subject {
	Physics = "PHYSICS",
	Chemistry = "CHEMISTRY",
	Biology = "BIOLOGY",
	Mathematics = "MATHEMATICS",
	Geography = "GEOGRAPHY",
}

export interface IUser {
	id: string;
	name?: string;
	email?: string;
	type: IUserType;
}

export enum IUserType {
	Student = "STUDENT",
	Teacher = "TEACHER",
	Admin = "ADMIN",
	Freelancer = "FREELANCER",
}

export interface IClass {
	id: string;
	name: string;
	subject: Subject;
	teacher: IUser;
	students: IUser[];
}
