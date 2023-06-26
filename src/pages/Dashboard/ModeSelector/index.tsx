import {
	Box,
	Flex,
	IconButton,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { Mode } from "../../../types";
import { BiRefresh } from "react-icons/all";
import { useDispatch } from "react-redux";
import { resetPresentor, updateMode } from "../../../redux";
import Sidebar from "../../../components/Sidebar";

interface IModelSelector {
	id: Mode;
	name: string;
	callback: () => void;
}

const ModeSelector = () => {
	const dispatch = useDispatch();

	const modes: IModelSelector[] = [
		{
			id: Mode.Pdf,
			name: "PDF",
			callback: () => {
				dispatch(updateMode(Mode.Pdf));
				// dispatch(resetPresentor());
			},
		},
		{
			id: Mode.Media,
			name: "Media",
			callback: () => {
				dispatch(updateMode(Mode.Media));
				// dispatch(resetPresentor());
			},
		},
		{
			id: Mode.Model,
			name: "3D Model",
			callback: () => {
				dispatch(updateMode(Mode.Model));
				dispatch(resetPresentor());
			},
		},
		{
			id: Mode.Presentation,
			name: "Presentation",
			callback: () => {
				dispatch(updateMode(Mode.Presentation));
				dispatch(resetPresentor());
			},
		},
		{
			id: Mode.ScreenShare,
			name: "Screen Share",
			callback: () => {
				dispatch(updateMode(Mode.ScreenShare));
				dispatch(resetPresentor());
			},
		},
		{
			id: Mode.Simulation,
			name: "HTML Simulation",
			callback: () => {
				dispatch(updateMode(Mode.Simulation));
				dispatch(resetPresentor());
			},
		},
		{
			id: Mode.Whiteboard,
			name: "Whiteboard",
			callback: () => {
				dispatch(updateMode(Mode.Whiteboard));
				dispatch(resetPresentor());
			},
		},
	];

	const onResetMode = () => {
		dispatch(updateMode(Mode.Initial));
		dispatch(resetPresentor());
	};

	return (
		<Box m={4} w="200px">
			<Flex m={2} mb={4} justify="space-between">
				<Text fontWeight="black" fontSize="2xl" textAlign="center">
					Modes
				</Text>
				<IconButton
					aria-label="Mode-reset"
					bg="transparent"
					icon={<BiRefresh color={useColorModeValue("black", "white")} />}
					_hover={{ bg: useColorModeValue("gray.300", "gray.700") }}
					onClick={onResetMode}
					title="Reset Mode"
				/>
			</Flex>
			{/* menu */}
			<Sidebar linkItems={modes} />
		</Box>
	);
};

export default ModeSelector;
