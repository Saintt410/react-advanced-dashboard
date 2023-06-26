import { Box, Grid, Text } from "@chakra-ui/react";

type Props = {};

const InitialPresentor = (props: Props) => {
	return (
		<Grid h="100%" w="full" placeContent="center">
			<Text textAlign="center" fontSize="2xl" fontWeight="bold">
				Select a mode & go through the options, to see the presentor in action!
			</Text>
		</Grid>
	);
};

export default InitialPresentor;
