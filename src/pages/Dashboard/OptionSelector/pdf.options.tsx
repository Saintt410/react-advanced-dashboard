import { BsFilePdfFill } from "react-icons/all";
import { useDispatch } from "react-redux";
import { presentPdf } from "../../../redux";
import Sidebar from "../../../components/Sidebar";
// import TestPdf1 from "../../../assets/pdf-test.pdf";

const PdfModeOption = () => {
	const dispatch = useDispatch();

	const list = [
		{
			id: 1,
			name: "Test 1",
			icon: BsFilePdfFill,
			callback: () => {
				dispatch(
					presentPdf({
						url: "/pdfs/pdf-test.pdf",
					})
				);
			},
		},
		{
			id: 2,
			name: "Test 2",
			icon: BsFilePdfFill,
			callback: () => {
				dispatch(
					presentPdf({
						url: "/pdfs/pdf-test.pdf",
					})
				);
			},
		},
		{
			id: 3,
			name: "Test 3",
			icon: BsFilePdfFill,
			callback: () => {
				dispatch(
					presentPdf({
						url: "/pdfs/pdf-test.pdf",
					})
				);
			},
		},
		{
			id: 4,
			name: "Test 4",
			icon: BsFilePdfFill,
			callback: () => {
				dispatch(
					presentPdf({
						url: "/pdfs/pdf-test.pdf",
					})
				);
			},
		},
		{
			id: 5,
			name: "Test 5",
			icon: BsFilePdfFill,
			callback: () => {
				dispatch(
					presentPdf({
						url: "/pdfs/pdf-test.pdf",
					})
				);
			},
		},
		{
			id: 6,
			name: "Test 6",
			icon: BsFilePdfFill,
			callback: () => {
				dispatch(
					presentPdf({
						url: "/pdfs/pdf-test.pdf",
					})
				);
			},
		},
	];

	return <Sidebar linkItems={list} />;
};

export default PdfModeOption;
