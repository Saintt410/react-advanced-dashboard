import React, { ReactNode } from "react";
import {
	IconButton,
	Avatar,
	Box,
	Flex,
	HStack,
	VStack,
	useColorModeValue,
	Text,
	useDisclosure,
	FlexProps,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	useColorMode,
} from "@chakra-ui/react";
import { FiBell, FiChevronDown } from "react-icons/fi";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header({ children }: { children: ReactNode }) {
	const { onOpen } = useDisclosure();
	return (
		<Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
			{/* mobilenav */}
			<MobileNav onOpen={onOpen} />
			<Box ml={{ base: 0 }}>{children}</Box>
		</Box>
	);
}

// sidebar nav item
interface MobileProps extends FlexProps {
	onOpen: () => void;
}

// Profile dropdown in right corner
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Flex
			ml={{ base: 0 }}
			px={{ base: 4, md: 4 }}
			height="20"
			alignItems="center"
			bg={useColorModeValue("white", "gray.900")}
			justifyContent={{ base: "space-between", md: "flex-end" }}
			{...rest}
		>
			<Text
				display={{ base: "flex", md: "none" }}
				fontSize="2xl"
				fontFamily="monospace"
				fontWeight="bold"
			>
				Logo
			</Text>

			<HStack spacing={{ base: "0", md: "6" }}>
				<IconButton
					aria-label="theme"
					icon={colorMode === "light" ? <FaMoon /> : <FaSun color="white" />}
					onClick={toggleColorMode}
					bg="transparent"
				/>
				<IconButton
					size="lg"
					variant="ghost"
					aria-label="open menu"
					icon={<FiBell />}
				/>
				<Flex alignItems={"center"}>
					<Menu>
						<MenuButton
							py={2}
							transition="all 0.3s"
							_focus={{ boxShadow: "none" }}
						>
							<HStack>
								<Avatar
									size={"sm"}
									src={
										"https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
									}
								/>
								<VStack
									display={{ base: "none", md: "flex" }}
									alignItems="flex-start"
									spacing="1px"
									ml="2"
								>
									<Text fontSize="sm">Justina Clark</Text>
									<Text fontSize="xs" color="gray.600">
										Admin
									</Text>
								</VStack>
								<Box display={{ base: "none", md: "flex" }}>
									<FiChevronDown />
								</Box>
							</HStack>
						</MenuButton>
						<MenuList
							bg={useColorModeValue("white", "gray.900")}
							borderColor={useColorModeValue("gray.200", "gray.700")}
						>
							<MenuItem>Profile</MenuItem>
							<MenuItem>Settings</MenuItem>
							<MenuItem>Billing</MenuItem>
							<MenuDivider />
							<MenuItem>Sign out</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</HStack>
		</Flex>
	);
};
