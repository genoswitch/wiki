import { Button, Grid, Link, Paper, Typography } from "@mui/material";

import { graphql, useStaticQuery } from "gatsby";

import * as React from "react";
import SchoolLogos from "./components/schoolLogos";
import { SponsorNode } from "../../types/graphql/sponsorNode";
import SponsorLogos from "./components/sponsorLogos";

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
                        <Grid item xs={12} display="flex" alignItems="end">
                            {/** Source Code Button */}
                            <Button variant="contained" target="_blank" href="https://gitlab.igem.org/2023/city-of-london-uk">Source Code</Button>
                            {/** SHA Text / Button */}
                            <Typography sx={{ paddingLeft: 2, color: "white" }}>(SHA: <Button variant="text" target="_blank" href={`https://gitlab.igem.org/2023/city-of-london-uk/-/commit/${longSha}`}>{shortSha}</Button>)</Typography>
                        </Grid>
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