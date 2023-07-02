import { Grid, Link, Paper, Typography } from "@mui/material";

import { graphql, useStaticQuery } from "gatsby";

import * as React from "react";

import SchoolLogos from "./components/schoolLogos";
import SponsorLogos from "./components/sponsorLogos";
import SourceAndSha from "./components/sourceAndSha";

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

const DesktopFooter = () => {
    const data = useStaticQuery(query);
    const assetPath = data.site.siteMetadata.assetBasePath;
    const longSha = data.site.siteMetadata.sha;
    const shortSha = longSha.substring(0, 8);

    return (
        <>
            <Paper sx={{ backgroundColor: "#0a1628", color: "white" }}>
                {/** Root grid. Size: 12 columns (default) */}
                <Grid container spacing={2}>

                    {/** Left side */}
                    <Grid container item xs={6}>
                        {/** Left: Source code */}
                        <SourceAndSha longSha={longSha} shortSha={shortSha} />
                        <Grid item xs={12}>
                            <Typography>© 2023 - Content on this site is licensed under a <Link underline="hover" target="_blank" href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International license.</Link></Typography>
                        </Grid>
                    </Grid>

                    {/** Right side */}
                    <Grid container xs={6}>
                        <SponsorLogos nodes={data.allSponsorYaml.nodes} assetPath={assetPath} />
                        <Grid item container sx={{ justifyContent: "flex-end" }}>
                            <SchoolLogos assetPath={assetPath} />
                        </Grid>
                    </Grid>

                </Grid>
            </Paper >
        </>
    )
}

export default DesktopFooter;