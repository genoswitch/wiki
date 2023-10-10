import * as React from "react";

import { Grid } from "@mui/material";
import { SponsorNode } from "../../../types/graphql/sponsorNode";

type SponsorLogoProps = {
	nodes: SponsorNode[];
	assetPath: string;
	containerSx: object;
	elementSx: object;
	size: number;
};

const SponsorLogos = ({ nodes, assetPath, containerSx, elementSx, size }: SponsorLogoProps) => {
	return (
		<Grid item container spacing={2} sx={containerSx}>
			{nodes.map(node => {
				return (
					<Grid item key={`sponsorGrid-${node.name}`} xs={size} sx={elementSx}>
						<a href={node.url!} target="_blank">
							<img
								src={`${assetPath}${node.logoPath}`}
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

export default SponsorLogos;
