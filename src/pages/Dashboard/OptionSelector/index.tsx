import { ReactNode, useEffect, useState } from "react";
import { Box, Collapse, Slide, Text } from "@chakra-ui/react";
import { Mode } from "../../../types";
import PdfModeOption from "./pdf.options";
import ModelPotions from "./model.options";
import InitialModeOption from "./initial.options";
import { useSelector } from "react-redux";
import { IStore } from "../../../redux";

type Props = {};

const OptionSelector = (props: Props) => {
	const mode = useSelector((state: IStore) => state.user.mode);

	const [SelectedModeComponent, setSelectedModeComponent] =
		useState<ReactNode | null>(null);

	useEffect(() => {
		switch (mode) {
			case Mode.Pdf:
				setSelectedModeComponent(PdfModeOption);
				break;

			case Mode.Model:
				setSelectedModeComponent(ModelPotions);
				break;

			case Mode.Media:
				setSelectedModeComponent(InitialModeOption);
				break;

			case Mode.Presentation:
				setSelectedModeComponent(InitialModeOption);
				break;

			case Mode.ScreenShare:
				setSelectedModeComponent(InitialModeOption);
				break;

			case Mode.Simulation:
				setSelectedModeComponent(InitialModeOption);
				break;

			case Mode.Whiteboard:
				setSelectedModeComponent(InitialModeOption);
				break;
		}
	}, [mode]);

	return (
		<Collapse
			style={{
				width: "20%",
			}}
			in={mode !== Mode.Initial}
			animateOpacity={true}
		>
			<Box>
				<Text w="full" textAlign="center" m="auto">
					Choose an option
				</Text>
				<Box p={2}>{SelectedModeComponent}</Box>
			</Box>
		</Collapse>
	);
};

export default OptionSelector;
