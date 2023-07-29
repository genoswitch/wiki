import * as React from "react";

import { withPrefix } from "gatsby";

import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import DrawerProps from "../types/drawerProps";
import Logo from "./logo";
import MobileButtonEntry from "./mobileButtonEntry";
import MobileButtonDropdown from "./mobileButtonDropdown";

const DrawerContents = (props: DrawerProps) => {
	return (
		<Box onClick={props.handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Logo style={{ padding: 16 }} />
			<List>
				{props.entries.map(entry => {
					if (entry.name && entry.slug && !entry.entries) {
						// Single entry
						return <MobileButtonEntry entry={entry} />;
					} else if (entry.name && !entry.slug && entry.entries) {
						return (
							<MobileButtonDropdown entry={entry} handleDrawerToggle={props.handleDrawerToggle} />
						);
					} else {
						console.error(`Invalid mobile navigation entry '${entry.name}'`);
					}
				})}
			</List>
		</Box>
	);
};

export default DrawerContents;
