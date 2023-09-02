import { Grid, Paper } from "@mui/material";

import * as React from "react";

import ProminentLogos from "./components/prominentLogos";
import SponsorLogos from "./components/sponsorLogos";
import SourceAndSha from "./components/sourceAndSha";
import Copyright from "./components/copyright";

import { FooterProps } from "./types/footerProps";
import { SponsorNode } from "../../types/graphql/sponsorNode";
import PreviousYears from "./components/previousYears";

// We are using the type Queries.Query in which everything is an optional.
// Unfortunately that means we have to notNull everything
// (We are currently assuming that the programmer had the correct query)
const DesktopFooter = ({ data }: FooterProps) => {
	const assetPath = data!.site!.siteMetadata!.assetBasePath!;
	const longSha = data!.site!.siteMetadata!.sha!;
	const shortSha = longSha.substring(0, 8);

	return (
		<>
			<Paper square sx={{ backgroundColor: "#0a1628", color: "white" }}>
				{/** Root grid. Size: 12 columns (default) */}
				<Grid container spacing={2}>
					{/** Left side */}
					<Grid container item xs={6}>
						{/** Left: Source code */}
						<PreviousYears xs={4} nodes={data.allPreviousYearsYaml.nodes} />
						<SourceAndSha longSha={longSha} shortSha={shortSha} />
						<Grid item xs={12}>
							<Copyright />
						</Grid>
					</Grid>

					{/** Right side */}
					<Grid container xs={6}>
						{/** Top Right: School Logos */}
						<ProminentLogos
							containerSx={{ justifyContent: "flex-end" }}
							size={3}
							assetPath={assetPath}
							nodes={data.allProminentLogoYaml.nodes}
						/>

						{/** Bottom Right: Sponsor Logos */}
						<SponsorLogos
							containerSx={{ justifyContent: "flex-end" }}
							elementSx={{ display: "flex", alignItems: "center" }}
							size={2}
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
					</Grid>
				</Grid>
			</Paper>
		</>
	);
};

export default DesktopFooter;
