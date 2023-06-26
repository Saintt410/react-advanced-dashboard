import { Box, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";
import Header from "./Header";

type Props = {
	children: React.ReactNode;
};

const Layout = (props: Props) => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<div
			style={{
				height: "100vh",
				width: "100vw",
			}}
		>
			{/* top header with theme switch */}
			{/* <Flex justify="space-between" p={2} px={6}>
				<Box>Logo</Box>

        <IconButton
					aria-label="theme"
					icon={colorMode === "light" ? <FaMoon /> : <FaSun color="white"/>}
          onClick={toggleColorMode}
          bg="transparent"
				/>
			</Flex> */}
			<Header>{props.children}</Header>
		</div>
	);
};

export default Layout;
