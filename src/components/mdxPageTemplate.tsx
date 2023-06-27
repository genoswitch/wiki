import * as React from "react";
import NavBar from "./navbar";
import { Container } from "@mui/material";

const MdxPageTemplate = ({ children }) => {
	return (
		<>
			<NavBar />
			<br />
			<Container>{children}</Container>
		</>
	);
};

export default MdxPageTemplate;
