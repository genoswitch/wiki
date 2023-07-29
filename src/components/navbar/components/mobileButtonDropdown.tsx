import * as React from "react";
import NavigationEntry from "../types/navigationEntry";
import { Collapse, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { withPrefix } from "gatsby";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

type MobileButtonDropdownProps = {
	entry: NavigationEntry;
	handleDrawerToggle: Function;
};

const MobileButtonDropdown = ({ entry, handleDrawerToggle }: MobileButtonDropdownProps) => {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
		// The drawer will attempt to close itself on a click.
		// Call handleDrawerToggle again to re-open the drawer.
		// TODO: bit of a hacky way to do this?
		handleDrawerToggle();
	};

	return (
		<>
			<ListItem key={entry.name} disablePadding>
				<ListItemButton onClick={handleClick}>
					<ListItemText primary={entry.name} />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
			</ListItem>
			{/** MUI Nested List */}
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					{entry.entries.map(subEntry => (
						<ListItem key={subEntry.name} disablePadding>
							<ListItemButton sx={{ paddingLeft: 4 }} href={withPrefix(subEntry.slug!)}>
								<ListItemText primary={subEntry.name} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Collapse>
		</>
	);
};

export default MobileButtonDropdown;
