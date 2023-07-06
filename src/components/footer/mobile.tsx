import * as React from "react";

import { Grid, Paper } from "@mui/material";

import SponsorLogos from "./components/sponsorLogos";
import SchoolLogos from "./components/schoolLogos";
import SourceAndSha from "./components/sourceAndSha";
import Copyright from "./components/copyright";

const MobileFooter = ({ data }) => {
	const assetPath = data.site.siteMetadata.assetBasePath;
	const longSha = data.site.siteMetadata.sha;
	const shortSha = longSha.substring(0, 8);

	return (
		<>
			<Paper square sx={{ backgroundColor: "#0a1628", color: "white" }}>
				{/** Root grid. Size: 12 columns (default) */}
				<Grid container spacing={2}>
					{/** Desktop: Top left (nothing yet) */}

					{/** School Logos */}
					<SchoolLogos containerSx={{}} size={6} assetPath={assetPath} nodes={data.allProminentLogoYaml.nodes} />

					{/** Sponsors */}
					<SponsorLogos
						containerSx={{}}
						elementSx={{ display: "flex", alignItems: "center" }}
						size={4}
						nodes={data.allSponsorYaml.nodes}
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
