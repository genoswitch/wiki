import * as React from "react";

import { Button, Grid, Typography } from "@mui/material";

type SourceAndShaProps = {
    longSha: string,
    shortSha: string
}

const SourceAndSha = ({ longSha, shortSha }: SourceAndShaProps) => {
    return (
        <Grid item xs={12} display="flex" alignItems="end">
            {/** Source Code Button */}
            <Button variant="contained" target="_blank" href="https://gitlab.igem.org/2023/city-of-london-uk">Source Code</Button>
            {/** SHA Text / Button */}
            <Typography sx={{ paddingLeft: 2, color: "white" }}>(SHA: <Button variant="text" target="_blank" href={`https://gitlab.igem.org/2023/city-of-london-uk/-/commit/${longSha}`}>{shortSha}</Button>)</Typography>
        </Grid>
    )
}

export default SourceAndSha;