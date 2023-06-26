import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ToastProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./theme";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Provider } from "react-redux";
import store from "./redux/store";
import About from "./pages/About/About";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Dashboard />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "*",
		element: <h1>404</h1>,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<RouterProvider router={router} />
			</ChakraProvider>
		</Provider>
	</React.StrictMode>
);
