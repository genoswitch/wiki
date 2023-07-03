import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";

import { Grid, Paper } from "@mui/material";

import SponsorLogos from "./components/sponsorLogos";
import SchoolLogos from "./components/schoolLogos";
import SourceAndSha from "./components/sourceAndSha";
import Copyright from "./components/copyright";

export const query = graphql`
	query FooterData {
		site {
			siteMetadata {
				sha
				assetBasePath
			}
		}
		allSponsorYaml {
			nodes {
				name
				logoPath
			}
		}
	}
`;

const MobileFooter = () => {
	const data = useStaticQuery(query);
	const assetPath = data.site.siteMetadata.assetBasePath;
	const longSha = data.site.siteMetadata.sha;
	const shortSha = longSha.substring(0, 8);

	return (
		<>
			<Paper sx={{ backgroundColor: "#0a1628", color: "white" }}>
				{/** Root grid. Size: 12 columns (default) */}
				<Grid container spacing={2}>
					{/** Desktop: Top left (nothing yet) */}

					{/** School Logos */}
					<SchoolLogos size={6} assetPath={assetPath} />

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
