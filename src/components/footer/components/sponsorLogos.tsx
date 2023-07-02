import * as React from "react";

import { Grid } from "@mui/material"
import { SponsorNode } from "../../../types/graphql/sponsorNode";

type SponsorLogoProps = {
    nodes: SponsorNode[];
    assetPath: string
    containerSx: object
    elementSx: object
    size: number
}

const SponsorLogos = ({ nodes, assetPath, containerSx, elementSx, size }: SponsorLogoProps) => {
    return (
        <Grid item container spacing={2} sx={containerSx}>
            {nodes.map(node => {
                return (
                    <Grid item xs={size} sx={elementSx}>
                        <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={assetPath + node.logoPath} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default SponsorLogos;