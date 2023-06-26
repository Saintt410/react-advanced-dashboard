import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const theme = extendTheme({
	config,
	components: {
		Button: {
			baseStyle: {
				borderRadius: "md",
			},
			variants: {
				solid: {
					bg: "brand.100",
					color: "black",
					_hover: {
						bg: "gray",
						color: "brand.100",
					},
					_active: {
						bg: "brand.700",
					},
				},
			},
		},
		Tab: {
			baseStyle: {
				fontWeight: "bold",
				colorScheme: "blue",
			},
		},
		Text: {
			baseStyle: {
				fontWeight: "thin",
			},
		},
	},
	colors: {
		brand: {
			50: "#f7fafc",
			100: "#edf2f7",
			200: "#e2e8f0",
		},
		primary: {
			50: "#f7fafc",
			100: "#edf2f7",
			200: "#e2e8f0",
		},
		secondary: {
			50: "#f7fafc",
			100: "#edf2f7",
			200: "#e2e8f0",
		},
	},
});

export default theme;
