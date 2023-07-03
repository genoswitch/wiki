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
				<a href="https://clsg.org.uk/" target="_blank">
					<img
						style={{ maxWidth: "100%", maxHeight: "100%" }}
						src={assetPath + "logos/clsg-transparent.png"}
						alt="City of London School for Girls Logo"
					/>
				</a>
			</Grid>
			<Grid item xs={size}>
				<a href="https://www.cityoflondonschool.org.uk/" target="_blank">
					<img
						style={{ maxWidth: "100%", maxHeight: "100%" }}
						src={assetPath + "logos/clsb-transparent.png"}
						alt="City of London School for Boys Logo"
					/>
				</a>
			</Grid>
		</Grid>
	);
};

export default SchoolLogos;
