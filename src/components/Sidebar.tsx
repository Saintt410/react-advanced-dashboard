import React, { ReactNode } from "react";
import {
	Box,
	Flex,
	Icon,
	useColorModeValue,
	Link,
	useDisclosure,
	BoxProps,
	FlexProps,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { ReactText } from "react";

interface LinkItemProps {
	id?: string | number;
	name: string;
	icon?: IconType;
	callback?: () => void;
}

export default function Sidebar({
	linkItems,
}: {
	linkItems: Array<LinkItemProps>;
}) {
	const { onClose } = useDisclosure();

	return (
		<Box minH="fit-content" bg={useColorModeValue("gray.100", "gray.900")}>
			<SidebarContent
				onClose={() => onClose}
				display={{ base: "none", md: "block" }}
				items={linkItems}
			/>
		</Box>
	);
}

interface SidebarProps extends BoxProps {
	onClose: () => void;
	items: Array<LinkItemProps>;
}

const SidebarContent = ({ onClose, items, ...rest }: SidebarProps) => {
	return (
		<Box
			bg={useColorModeValue("white", "gray.900")}
			w="full"
			h="fit-content"
			{...rest}
		>
			{" "}
			{items.map((link) => (
				<NavItem
					key={link.name}
					icon={link.icon}
					callback={link.callback}
					m={0}
					gap={1}
				>
					{link.name}
				</NavItem>
			))}
		</Box>
	);
};

interface NavItemProps extends FlexProps {
	children: ReactText;
	icon?: IconType;
	callback?: () => void;
}

const NavItem = ({ icon, callback, children, ...rest }: NavItemProps) => {
	return (
		<Link
			href="#"
			style={{ textDecoration: "none" }}
			_focus={{ boxShadow: "none" }}
		>
			<Flex
				align="center"
				p="4"
				mx="4"
				borderRadius="lg"
				role="group"
				cursor="pointer"
				_hover={{
					bg: "cyan.400",
					color: "white",
				}}
				onClick={callback}
				{...rest}
			>
				{icon && (
					<Icon
						mr="4"
						fontSize="16"
						_groupHover={{
							color: "white",
						}}
						as={icon}
					/>
				)}
				{children}
			</Flex>
		</Link>
	);
};
