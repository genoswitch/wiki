import * as React from "react";

import { Grid } from "@mui/material";
import { SponsorNode } from "../../../types/graphql/sponsorNode";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";

type SponsorLogoProps = {
	nodes: SponsorNode[];
	assetPath: string;
	containerSx: object;
	elementSx: object;
	size: number;
};

const SponsorLogos = ({ nodes, containerSx, elementSx, size }: SponsorLogoProps) => {
	return (
		<Grid item container spacing={2} sx={containerSx}>
			{nodes.map(node => {
				// To make TS happy, use the notNull assertion for dynamicImage as well as getImage's return value.
				// Also cast dynamicImage to ImageDataLike (mismatched so must cast to unknown first.)
				const image = getImage(node.dynamicImage! as unknown as ImageDataLike)!;

				return (
					<Grid item key={`sponsorGrid-${node.name}`} xs={size} sx={elementSx}>
						<GatsbyImage image={image} style={{ maxWidth: "100%", maxHeight: "100%" }} alt={`${node.name} Logo`} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default SponsorLogos;
