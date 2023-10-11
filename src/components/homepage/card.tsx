import * as React from "react";
import { navigate } from "gatsby";

import { GatsbyImage } from "gatsby-plugin-image";
import {
	createTheme,
	Card,
	CardContent,
	ThemeProvider,
	Typography,
	Theme,
	Box,
} from "@mui/material";

import { HomepageCardNode } from "../../types/graphql/homepageCardNode";

import "./card.css";

const theme = createTheme({
	palette: {
		background: {
			paper: "#0a1628", // your color
		},
		text: {
			// header
			primary: "#fffff",
		},
	},
});

type HomepageCardProps = {
	card: HomepageCardNode;
};

// Change size of card image depending on screen size
const imageStyle = (theme: Theme) => ({
	[theme.breakpoints.down("sm")]: {
		img: {
			minHeight: "50vh",
		},
	},
	[theme.breakpoints.up("sm")]: {
		img: {
			maxHeight: "50vh",
		},
	},
});
export default class HomepageCard extends React.Component<HomepageCardProps, {}> {
	render(): React.ReactNode {
		return (
			<>
				<ThemeProvider theme={theme}>
					<div
						style={{
							filter: "drop-shadow(18px 18px 20px rgba(0, 0, 0, 0.5))",
							backgroundColor: "#0a1628",
							border: "none",
							color: "white",
							borderRadius: "20px",
						}}
					>
						<a
							href="#"
							onClick={() => navigate(this.props.card.path)}
							style={{ textDecoration: "none", color: "inherit" }}
						>
							<Card style={{ position: "relative" }}>
								{/** cardMedia */}
								<Box sx={imageStyle}>
									<GatsbyImage
										alt={`$${this.props.card.name} header image`}
										image={image}
										style={{
											position: "absolute",
											width: "100%",
											objectFit: "cover",
											maskImage: "linear-gradient(to bottom, black 15%, transparent 55%)",
											// Required for chromium based browsers.
											"-webkit-mask-image":
												"linear-gradient(to bottom, black 15%, transparent 55%)",
										}}
									/>
								</Box>
								{/** TODO: Need better solution for padding cardContent, doesn't really work on smaller screens. */}
								<CardContent sx={{ paddingTop: "30vh" }}>
									<Typography
										sx={{ textAlign: "center", letterSpacing: "10px" }}
										className="cardHeader"
										gutterBottom
										variant="h2"
										component="div"
									>
										{this.props.card.name}
									</Typography>
									{this.props.card.description}
								</CardContent>
							</Card>
						</a>
					</div>
				</ThemeProvider>
			</>
		);
	}
}
