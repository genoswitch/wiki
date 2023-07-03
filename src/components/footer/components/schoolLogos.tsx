import * as React from "react";

import { Grid } from "@mui/material";

type SchoolLogoProps = {
	assetPath: string;
	size: number;
};

const SchoolLogos = ({ assetPath, size }: SchoolLogoProps) => {
	return (
		<>
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
		</>
	);
};

export default SchoolLogos;
