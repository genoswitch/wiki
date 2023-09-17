import * as React from "react";

import { Grid, Link, Typography } from "@mui/material";

const Copyright = () => {
	return (
		<Grid item>
			<Typography>
				© 2023 - Content on this site is licensed under a{" "}
				<Link underline="hover" target="_blank" href="https://creativecommons.org/licenses/by/4.0/">
					Creative Commons Attribution 4.0 International license.
				</Link>
			</Typography>
		</Grid>
	);
};

export default Copyright;
