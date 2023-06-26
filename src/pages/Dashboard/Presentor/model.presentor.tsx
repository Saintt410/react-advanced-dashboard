import { Box } from "@chakra-ui/react";
import React from "react";
import ModelViewer from "../../../components/ModelViewer";

type Props = {};

const ModelPresentor = (props: Props) => {
	const url = "/models/reaction.1.glb";

	return (
		<Box overflow="hidden" width="full" height="full">
			<ModelViewer url={url} />
		</Box>
	);
};

export default ModelPresentor;
