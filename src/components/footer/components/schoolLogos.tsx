import * as React from "react";

import { Grid } from "@mui/material"

type SchoolLogoProps = {
    assetPath: string
}

const SchoolLogos = ({ assetPath }: SchoolLogoProps) => {
    return (
        <>
            <Grid item xs={3}>
                <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={assetPath + "logos/clsg-transparent.png"} />
            </Grid>
            <Grid item xs={3}>
                <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={assetPath + "logos/clsb-transparent.png"} />
            </Grid>
        </>
    )
}

export default SchoolLogos;