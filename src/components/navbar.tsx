import * as React from "react";
import { withPrefix } from "gatsby";

import {
	AppBar,
	Container,
	Menu,
	Toolbar,
	Box,
	MenuItem,
	Typography,
	Button,
	IconButton,
	Divider,
	List,
	CssBaseline,
	Drawer,
	ListItem,
	ListItemText,
	ListItemButton,
	CardMedia,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type PageEntry = {
	name: string;
	link: string;
};

const entries: PageEntry[] = [
	{
		name: "Home",
		link: "",
	},
	{
		name: "Team",
		link: "team",
	},
	{
		name: "Team Description",
		link: "description",
	},
];

type LogoProps = {
	style?: object;
};

const Logo = (props: LogoProps) => {
	return (
		<>
			{/**
			 * GENOSWITCH logo
			 *
			 * color: style prop does not work on SVGs normally.
			 *
			 * CSS Filter generator used to generate the filter for hex code #77d9dd (light blue)
			 * https://codepen.io/sosuke/pen/Pjoqqp, https://stackoverflow.com/a/53336754
			 */}
			<img
				style={{
					maxWidth: 250,
					...props.style,
					filter:
						"invert(92%) sepia(65%) saturate(1099%) hue-rotate(157deg) brightness(92%) contrast(87%)",
				}}
				src={"https://static.igem.wiki/teams/4642/wiki/logos/project/black.svg"}
			/>
		</>
	);
};

const AnimatedLogo = (props: LogoProps) => {
	/**
	 * Transparent Animated WebP
	 *
	 * See: https://github.com/genoswitch/wiki-assets/tree/main/intermediates/logo-animation
	 * 		https://developer.chrome.com/blog/alpha-transparency-in-chrome-video/
	 */
	return (
		<CardMedia
			sx={{ maxWidth: 250, ...props.style }}
			component="img"
			src="https://static.igem.wiki/teams/4642/wiki/logos/project/light-blue-animated.webp"
		/>
	);
};

type DrawerProps = {
	handleDrawerToggle: Function;
};

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
