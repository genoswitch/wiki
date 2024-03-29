import * as React from "react";

import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Grid } from "@mui/material";
import { ProminentLogoNode } from "../../../types/graphql/prominentLogoNode";

type ProminentLogoProps = {
	nodes: ProminentLogoNode[];
	assetPath: string;
	size: number;
	containerSx: object;
};

const ProminentLogos = ({ nodes, assetPath, size, containerSx }: ProminentLogoProps) => {
	return (
		<Grid item container spacing={0} sx={containerSx}>
			{nodes.map(node => {
				// To make TS happy, use the notNull assertion for dynamicImage as well as getImage's return value.
				// Also cast dynamicImage to ImageDataLike (mismatched so must cast to unknown first.)
				const image = getImage(node.dynamicImage! as unknown as ImageDataLike)!;

				return (
					<Grid item xs={size} key={`ProminentLogo-${node.name}`}>
						<a href={node.url!} target="_blank">
							<GatsbyImage
								image={image}
								style={{ maxWidth: "100%", maxHeight: "100%" }}
								alt={`${node.name} Logo`}
							/>
						</a>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default ProminentLogos;
