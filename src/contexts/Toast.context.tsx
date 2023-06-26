import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { useToast, UseToastOptions } from "@chakra-ui/react";

type ToastContextType = {
	toast: (config: UseToastOptions) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export const useToastContext = () => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error("useToastContext must be used within a ToastProvider");
	}
	return context;
};

type Props = {
	children: ReactNode;
};

export const ToastProvider = ({ children }: Props) => {
	const toast = useToast();

	return (
		<ToastContext.Provider value={{ toast }}>{children}</ToastContext.Provider>
	);
};
