import * as React from "react";

import { Grid, Paper } from "@mui/material";

import SponsorLogos from "./components/sponsorLogos";
import ProminentLogos from "./components/prominentLogos";
import SourceAndSha from "./components/sourceAndSha";
import Copyright from "./components/copyright";
import { FooterProps } from "./types/footerProps";
import { SponsorNode } from "../../types/graphql/sponsorNode";

// We are using the type Queries.Query in which everything is an optional.
// Unfortunately that means we have to notNull everything
// (We are currently assuming that the programmer had the correct query)
const MobileFooter = ({ data }: FooterProps) => {
	const assetPath = data!.site!.siteMetadata!.assetBasePath!;
	const longSha = data!.site!.siteMetadata!.sha!;
	const shortSha = longSha.substring(0, 8);

	return (
		<>
			<Paper square sx={{ backgroundColor: "#0a1628", color: "white" }}>
				{/** Root grid. Size: 12 columns (default) */}
				<Grid container spacing={2}>
					{/** Desktop: Top left (nothing yet) */}

					{/** School Logos */}
					<ProminentLogos
						containerSx={{}}
						size={6}
						assetPath={assetPath}
						nodes={data.allProminentLogoYaml.nodes}
					/>

					{/** Sponsors */}
					<SponsorLogos
						containerSx={{}}
						elementSx={{ display: "flex", alignItems: "center" }}
						size={3} // Size 3 (12 for a row) means we can fit 4 items on a row.
						/**
						 * TypeScript believes that Queries.SponsorYaml[]
						 * and SponsorNode[] do not (sufficiently) overlap.
						 *
						 * (SponsorNode is based on SponsorYaml.)
						 *
						 * Therefore, we must cast to unknown first before
						 * casting to SponsorNode.
						 */
						nodes={data!.allSponsorYaml!.nodes! as unknown as SponsorNode[]}
						assetPath={assetPath}
					/>

					{/** Source code button and SHA */}
					<SourceAndSha longSha={longSha} shortSha={shortSha} />

					{/** Copyright */}
					<Copyright />
				</Grid>
			</Paper>
		</>
	);
};

export default MobileFooter;
