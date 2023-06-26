import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import ModeSelector from "./ModeSelector";
import OptionSelector from "./OptionSelector";
import Presentor from "./Presentor";
import { Mode } from "../../types";

const Dashboard = () => {
	return (
		<Layout>
			<Flex w="full" h="90vh">
				<OptionSelector />
				<Presentor />
				<ModeSelector />
			</Flex>
		</Layout>
	);
};

export default Dashboard;
