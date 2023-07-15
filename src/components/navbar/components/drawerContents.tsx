import * as React from "react";

import { withPrefix } from "gatsby";

import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import DrawerProps from "../types/drawerProps";
import Logo from "./logo";
import { PageEntry, entries } from "../entries";

const DrawerContents = (props: DrawerProps) => {
	return (
		<Box onClick={props.handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Logo style={{ padding: 16 }} />
			<List>
				{entries.map((entry: PageEntry) => (
					<ListItem key={entry.name} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }} href={withPrefix(entry.link)}>
							<ListItemText primary={entry.name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default DrawerContents;
