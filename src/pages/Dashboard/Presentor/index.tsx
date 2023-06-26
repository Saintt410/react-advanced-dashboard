import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../../redux";
import { Mode } from "../../../types";
import InitialPresentor from "./initial.presentor";
import ModelPresentor from "./model.presentor";
import PdfPresentor from "./pdf.presentor";

const Presentor = () => {
	const mode = useSelector((state: IStore) => state.user.mode);
	const [SelectedModePresentor, setSelectedModePresentor] =
		useState<ReactNode | null>(null);

	useEffect(() => {
		switch (mode) {
			case Mode.Pdf:
				setSelectedModePresentor(<PdfPresentor />);
				break;

			case Mode.Model:
				setSelectedModePresentor(<ModelPresentor />);
				break;

			case Mode.Media:
				setSelectedModePresentor(<InitialPresentor />);
				break;

			case Mode.Presentation:
				setSelectedModePresentor(<InitialPresentor />);
				break;

			case Mode.ScreenShare:
				setSelectedModePresentor(<InitialPresentor />);
				break;

			case Mode.Simulation:
				setSelectedModePresentor(<InitialPresentor />);
				break;

			case Mode.Whiteboard:
				setSelectedModePresentor(<InitialPresentor />);
				break;

			default:
				setSelectedModePresentor(<InitialPresentor />);
				break;
		}
	}, [mode]);

	return (
		<Flex direction="column" w="full" h="full">
			<Box bg={useColorModeValue("gray.200", "blue.700")} h="full">
				{SelectedModePresentor}
			</Box>
			<Flex w="full" h="200px" bg="gray">
				<Text textAlign="center">Footer</Text>
			</Flex>
		</Flex>
	);
};

export default Presentor;
