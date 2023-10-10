import * as React from "react";

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
				return (
					<Grid item xs={size} key={`ProminentLogo-${node.name}`}>
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

export default ProminentLogos;
