import { BsBox } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Sidebar from "../../../components/Sidebar";

const ModelModeOption = () => {
	const dispatch = useDispatch();

	const list = [
		{
			id: 1,
			name: "Molecule",
			icon: BsBox,
			callback: () => {
				// TODO create module for MODEL in redux
				// dispatch(
				// 	presentPdf({
				// 		url: "/pdfs/pdf-test.pdf",
				// 	})
				// );
			},
		},
	];

	return <Sidebar linkItems={list} />;
};

export default ModelModeOption;
