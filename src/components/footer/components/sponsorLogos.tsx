import * as React from "react";

import { Grid } from "@mui/material"
import { SponsorNode } from "../../../types/graphql/sponsorNode";

type SponsorLogoProps = {
    nodes: SponsorNode[];
    assetPath: string
}

const SponsorLogos = ({ nodes, assetPath }: SponsorLogoProps) => {
    return (
        <Grid item container spacing={2} sx={{ justifyContent: "flex-end" }}>
            {nodes.map(node => {
                return (
                    <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
                        <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={assetPath + node.logoPath} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default SponsorLogos;