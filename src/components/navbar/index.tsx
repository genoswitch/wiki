import * as React from "react";
import { graphql, navigate, useStaticQuery } from "gatsby";

import { AppBar, Toolbar, Box, Button, IconButton, CssBaseline, Drawer } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import AnimatedLogo from "./components/animatedLogo";
import DrawerContents from "./components/drawerContents";
import NavigationEntry from "./types/navigationEntry";
import DesktopButtonEntry from "./components/desktopButtonEntry";
import DesktopButtonDropdown from "./components/desktopButtonDropdown";

const drawerWidth = 240;

export const query = graphql`
	query NavBarData {
		allNavigationYaml {
    nodes {
      name
      slug
	  entries {
		name
		slug
	  }
    }
  }
	}
`

type NavBarProps = {
	entries?: NavigationEntry[]
}

const NavBar = ({ entries }: NavBarProps) => {
	// If entries was not passed as a prop, fetch the data ourselves.
	// This allows the parent prop to pass in as part of a single larger query if needed.
	if (!entries) {
		const data: Queries.NavBarDataQuery = useStaticQuery(query);
		console.log(data);
		entries = data.allNavigationYaml.nodes as NavigationEntry[];
	}

	const [mobileOpen, setMobileOpen] = React.useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen(prevState => !prevState);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar component="nav" position="static" sx={{ backgroundColor: "#0a1628" }}>
				<Toolbar>
					{/** Small Display: Drawer Button */}
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon htmlColor="#77d9dd" />
					</IconButton>

					{/** Large Display: Left of screen (filled except for btns) */}
					{/** JC: changed display: {xs: 'none' to 'block' } so it displays on xs screens. */}
					<Box sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}>
						<AnimatedLogo />
					</Box>

					{/** Large Display: Buttons */}
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{entries.map((entry: NavigationEntry) => {
							if (entry.name && entry.slug && !entry.entries) {
								// Single entry
								return <DesktopButtonEntry entry={entry} />
							} else if (entry.name && !entry.slug && entry.entries) {
								// Multiple entries (a dropdown must be shown).
								return <DesktopButtonDropdown entry={entry} />
							} else {
								console.error(`Invalid navigation entry '${entry.name}'`)
							}

						})}
					</Box>
				</Toolbar>
			</AppBar>
			{/** BOX FOR DRAWER?? */}
			<Box component="nav">
				<Drawer
					//container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							// Styles for the paper component inside Drawer
							// color is the text color

							boxSizing: "border-box",
							width: drawerWidth,
							backgroundColor: "#0a1628",
							color: "#77d9dd",
						},
					}}
				>
					{/** Drawer contents component (to make the code cleaner)*/}
					<DrawerContents entries={entries} handleDrawerToggle={handleDrawerToggle} />
				</Drawer>
			</Box>
		</Box>
	);
};

export default NavBar;
