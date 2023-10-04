import { createTheme, Card, CardContent, ThemeProvider, Typography } from "@mui/material";
import * as React from "react";
import bioPhoto from "../../images/bioGang.png";

import "./card.css";
import { HomepageCardNode } from "../../types/graphql/homepageCardNode";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";

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

export default class HomepageCard extends React.Component<HomepageCardProps, {}> {
	render(): React.ReactNode {
		// To make TS happy, use the notNull assertion for dynamicImage as well as getImage's return value.
		// Also cast dynamicImage to ImageDataLike (mismatched so must cast to unknown first.)
		const image = getImage(this.props.card.dynamicImage! as unknown as ImageDataLike)!;
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
						<Card style={{ position: "relative" }}>
							{/** cardMedia */}
							<GatsbyImage
								alt={`$${this.props.card.name} header image`}
								image={image}
								style={{
									position: "absolute",
									width: "100%",
									maxHeight: "50vh",
									objectFit: "cover",
									maskImage: "linear-gradient(to bottom, black 15%, transparent 55%)",
									// Required for chromium based browsers.
									"-webkit-mask-image": "linear-gradient(to bottom, black 15%, transparent 55%)"
								}}
							/>
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
					</div>
				</ThemeProvider>
			</>
		);
	}
}
