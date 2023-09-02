import * as React from "react";

import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";

import { PreviousYearsNode } from "../../../types/graphql/previousYearsNode";

type PreviousYearsProps = {
    nodes: PreviousYearsNode[];
    // size
    xs: number
}

const PreviousYears = ({ nodes, xs }: PreviousYearsProps) => {
    return (
        <Box sx={{ paddingLeft: 3 }}>
            <Grid item xs={12}>
                <Typography variant="h5" sx={{ color: "#77d9dd" }}>Previous Years</Typography>
            </Grid>
            <Grid container item spacing={2} >
                {nodes.map(node => (
                    <Grid item xs={xs}>
                        <div>
                            <Button target="_blank" href={node.link} sx={{ color: "#77d9dd", width: "100%", textTransform: "none" }}>
                                <div style={{ width: "100%" }}>
                                    <Typography variant="h6">{node.name}</Typography>
                                    <Typography variant="caption">iGEM {node.year}</Typography>
                                </div>
                            </Button>

                        </div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default PreviousYears;