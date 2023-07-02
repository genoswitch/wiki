import { Button, Grid, Paper, Typography } from "@mui/material";

import { graphql, useStaticQuery } from "gatsby";

import * as React from "react";
import SchoolLogos from "./components/schoolLogos";
import { SponsorNode } from "../../types/graphql/sponsorNode";

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
                {/** 12 columns (default) */}
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        TOP LEFT
                    </Grid>
                    <Grid container xs={6}>
                        <Grid container spacing={2} sx={{ justifyContent: "right" }}>
                            {data.allSponsorYaml.nodes.map((node: SponsorNode) => {
                                return (
                                    <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
                                        <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={assetPath + node.logoPath} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                    <Grid item xs={8} display="flex" alignItems="end">
                        {/** Source Code Button */}
                        <Button variant="contained" target="_blank" href="https://gitlab.igem.org/2023/city-of-london-uk">Source Code</Button>
                        {/** SHA Text / Button */}
                        <Typography sx={{ paddingLeft: 2, color: "white" }}>(SHA: <Button variant="text" target="_blank" href={`https://gitlab.igem.org/2023/city-of-london-uk/-/commit/${longSha}`}>{shortSha}</Button>)</Typography>
                    </Grid>

                    <SchoolLogos assetPath={assetPath} />
                </Grid>
            </Paper >
        </>
    )
}

export default DesktopFooter;