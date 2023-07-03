import * as React from "react";

import { Grid } from "@mui/material";

type SchoolLogoProps = {
	assetPath: string;
	size: number;
	containerSx: object;
};

const SchoolLogos = ({ assetPath, size, containerSx }: SchoolLogoProps) => {
	return (
		<Grid item container spacing={0} sx={containerSx}>
			<Grid item xs={size}>
				<img
					style={{ maxWidth: "100%", maxHeight: "100%" }}
					src={assetPath + "logos/clsg-transparent.png"}
				/>
			</Grid>
			<Grid item xs={size}>
				<img
					style={{ maxWidth: "100%", maxHeight: "100%" }}
					src={assetPath + "logos/clsb-transparent.png"}
				/>
			</Grid>
		</Grid>
	);
};

export default SchoolLogos;
