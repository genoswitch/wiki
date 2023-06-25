import * as React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import { StaticImage } from "gatsby-plugin-image"

export const query = graphql`
    query FooterData {
        site {
            siteMetadata {
            sha
            assetBasePath
        }
    }
}
`;

const Footer = () => {
    const data = useStaticQuery(query);
    const assetPath = data.site.siteMetadata.assetBasePath;
    const longSha = data.site.siteMetadata.sha;
    const shortSha = longSha.substring(0, 8);

    return <>
        <Paper sx={{ position: "fixed", bottom: 0, width: "100%", backgroundColor: "#0a1628" }}>
            <Container maxWidth="lg">
                {/**<Box>
                    {/** Source Code Button * /}
                    <Button variant="contained" href="https://gitlab.igem.org/2023/city-of-london-uk">Source Code</Button>
                    <Typography variant="body1" sx={{ paddingLeft: 2 }}>(SHA: ffffff)</Typography>
                </Box>*/}
                <Grid container spacing={2}>
                    <Grid xs={6} display="flex" alignItems="center">
                        {/** Source Code Button */}
                        <Button variant="contained" target="_blank" href="https://gitlab.igem.org/2023/city-of-london-uk">Source Code</Button>
                        {/** SHA Text / Button */}
                        <Typography sx={{ paddingLeft: 2, color: "white" }}>(SHA: <Button variant="text" target="_blank" href={`https://gitlab.igem.org/2023/city-of-london-uk/-/commit/${longSha}`}>{shortSha}</Button>)</Typography>
                    </Grid>
                    <Grid xs={2} sx={{ display: "flex", alignItems: "center" }}>
                        <img style={{ height: 140, width: 140 * 0.864321608 }} src={assetPath + "logos/john-carpenter-club-transparent.png"} />
                    </Grid>
                    <Grid xs={2}>
                        <img style={{ height: 150, width: 150 }} src={assetPath + "logos/clsg-transparent.png"} />
                    </Grid>
                    <Grid xs={2}>
                        <img style={{ height: 150, width: 150 }} src={assetPath + "logos/clsb-transparent.png"} />
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    </>
}

export default Footer;