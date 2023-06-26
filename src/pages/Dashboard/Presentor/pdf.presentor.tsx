import {
	Box,
	Flex,
	Grid,
	IconButton,
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
	Spinner,
	Text,
	useToast,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { IStore } from "../../../redux";
import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { GrDocumentMissing, FcNext, FcPrevious } from "react-icons/all";
import { ReactNode, useEffect, useState } from "react";

type Props = {};

const PdfPresentor = (props: Props) => {
	const [totalPages, setTotalPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [scale, setScale] = useState(0.7);
	const [isLoaded, setIsLoaded] = useState(false);

	const toast = useToast();
	const pdf = useSelector((state: IStore) => state.presentor.pdf);

	// when pdf changes, reset the page to 1, and set isLoaded to false
	useEffect(() => {
		setCurrentPage(1);
		setIsLoaded(false);
	}, [pdf]);

	if (!pdf)
		return (
			<Grid h="100%" w="full" placeContent="center">
				<Text textAlign="center" fontSize="2xl" fontWeight="bold">
					Please select a PDF to present
				</Text>
			</Grid>
		);

	return (
		<Box>
			{isLoaded && (
				<Text textAlign="center" m={0}>
					( {currentPage} / {totalPages} )
				</Text>
			)}
			<Grid h="78vh" w="full" placeContent="center" overflowY="scroll">
				{/* {pdf.url} */}
				<Document
					renderMode="canvas"
					// file={pdf.file}
					file={pdf.url}
					onLoadSuccess={(pdf) => {
						setTotalPages(pdf._pdfInfo.numPages);
						setIsLoaded(true);
						toast({
							title: "PDF loaded successfully",
							status: "success",
							duration: 2000,
							isClosable: true,
						});
					}}
					onLoadError={(error) => {
						console.log(error);
						toast({
							title: "PDF failed to load",
							status: "error",
							duration: 2000,
							isClosable: true,
						});
					}}
					noData={
						<center>
							<GrDocumentMissing size={80} />
							<Text mt={1}>PDF not found</Text>
						</center>
					}
					loading={
						<center>
							<Spinner />
							<Text>PDF loading</Text>
						</center>
					}
					error={
						<center>
							<GrDocumentMissing size={50} color="white" />
							<Text mt={1} color="black">
								PDF not found
							</Text>
						</center>
					}
				>
					<Page
						pageNumber={currentPage}
						renderTextLayer={false}
						scale={scale}
					/>
				</Document>
				{/* ) : (
					<Text>PDF not found</Text>
				)} */}
			</Grid>

			{isLoaded && (
				<PdfController
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					totalPages={totalPages}
					scale={scale}
					setScale={setScale}
				/>
			)}
		</Box>
	);
};

type PdfControllerProps = {
	currentPage: number;
	setCurrentPage: (page: number) => void;
	totalPages: number;
	scale: number;
	setScale: (scale: number) => void;
};

const PdfController = ({
	currentPage,
	setCurrentPage,
	totalPages,
	scale,
	setScale,
}: PdfControllerProps) => {
	return (
		<Flex justify="space-evenly" pt={2}>
			<ControllerItem title="Previous">
				<IconButton
					aria-label="previous page"
					bg="transparent"
					_hover={{ bg: "transparent" }}
					icon={<FcPrevious />}
					onClick={() => {
						if (currentPage > 1) setCurrentPage(currentPage - 1);
					}}
					disabled={currentPage === 1}
				/>
			</ControllerItem>

			<ControllerItem title="Scale">
				<Slider
					width={200}
					aria-label="scale"
					value={scale * 100}
					min={2}
					max={90}
					onChange={(s) => {
						setScale(s / 100);
					}}
				>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb />
				</Slider>
			</ControllerItem>

			<ControllerItem title="Next">
				<IconButton
					aria-label="next page"
					bg="transparent"
					_hover={{ bg: "transparent" }}
					icon={<FcNext />}
					onClick={() => {
						if (currentPage < totalPages) setCurrentPage(currentPage + 1);
					}}
					disabled={currentPage === totalPages}
				/>
			</ControllerItem>
		</Flex>
	);
};

type ControllerItemProps = {
	title: string;
	children: ReactNode;
};

const ControllerItem = ({ title, children }: ControllerItemProps) => {
	return (
		<Box>
			<Text textAlign="center">{title}</Text>
			{children}
		</Box>
	);
};

export default PdfPresentor;
