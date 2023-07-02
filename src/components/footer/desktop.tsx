import { Grid, Paper } from "@mui/material";

import { graphql, useStaticQuery } from "gatsby";

import * as React from "react";

import SchoolLogos from "./components/schoolLogos";
import SponsorLogos from "./components/sponsorLogos";
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
                            <Copyright />
                        </Grid>
                    </Grid>

                    {/** Right side */}
                    <Grid container xs={6}>
                        <SponsorLogos containerSx={{ justifyContent: "flex-end" }} elementSx={{ display: "flex", alignItems: "center" }} size={2} nodes={data.allSponsorYaml.nodes} assetPath={assetPath} />
                        <Grid item container sx={{ justifyContent: "flex-end" }}>
                            <SchoolLogos size={3} assetPath={assetPath} />
                        </Grid>
                    </Grid>

                </Grid>
            </Paper >
        </>
    )
}

export default DesktopFooter;