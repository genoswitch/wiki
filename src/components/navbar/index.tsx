import * as React from "react";
import { withPrefix } from "gatsby";

import { AppBar, Toolbar, Box, Button, IconButton, CssBaseline, Drawer } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import AnimatedLogo from "./components/animatedLogo";
import DrawerContents from "./components/drawerContents";
import { PageEntry, entries } from "./entries";

const drawerWidth = 240;

const NavBar = () => {
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
						{entries.map((entry: PageEntry) => (
							<Button key={entry.name} sx={{ color: "#77d9dd" }} href={withPrefix(entry.link)}>
								{" "}
								{/** fff appears to be shorthand for ffffff */}
								{entry.name}
							</Button>
						))}
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
					<DrawerContents handleDrawerToggle={handleDrawerToggle} />
				</Drawer>
			</Box>
		</Box>
	);
};

export default NavBar;
