import * as React from "react";

import NavBar from "./navbar";

import { CircularProgress, Container } from "@mui/material";

export default class LoadingPage extends React.Component {
	render(): React.JSX.Element {
		return (
			<>
				<NavBar />
				{/**
				 * Position elements in the middle(ish) of the screen.
				 * 90vh (90% of screen height) to prevent scroll bar thanks to space taken by the nav.
				 * Could also do position:absolute instead.
				 */}
				<Container
					maxWidth={false}
					disableGutters
					sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" }}
				>
					<CircularProgress />
				</Container>
			</>
		);
	}
}
