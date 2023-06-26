import * as React from 'react';
import { withPrefix } from 'gatsby';

import { AppBar, Container, Menu, Toolbar, Box, MenuItem, Typography, Button, IconButton, Divider, List, CssBaseline, Drawer, ListItem, ListItemText, ListItemButton } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";


type PageEntry = {
    name: string,
    link: string
}

const entries: PageEntry[] = [
    {
        name: "Home",
        link: ""
    },
    {
        name: "Team",
        link: "team"
    }
]

type LogoProps = {
    style?: object
}

const Logo = (props: LogoProps) => {
    return (
        <>
            {/** GENOSWITCH logo */}
            <img style={{ maxWidth: 250, ...props.style }} src={"https://static.igem.wiki/teams/4642/wiki/logos/cls-project-logo-white.svg"} />
        </>
    )
}

type DrawerProps = {
    handleDrawerToggle: Function
}

const DrawerContents = (props: DrawerProps) => {
    return (
        <Box onClick={props.handleDrawerToggle} sx={{ textAlign: "center" }}>

            <Logo style={{ padding: 16 }} />
            <List>
                {entries.map((entry: PageEntry) => (
                    <ListItem key={entry.name} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }} href={withPrefix(entry.link)} >
                            <ListItemText primary={entry.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

const drawerWidth = 240;

const NavBar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav" position="static" sx={{ backgroundColor: "#0a1628" }}>
                <Toolbar>
                    {/** Small Display: Drawer Button */}
                    <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
                        <MenuIcon />
                    </IconButton>

                    {/** Large Display: Left of screen (filled except for btns) */}
                    {/** JC: changed display: {xs: 'none' to 'block' } so it displays on xs screens. */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}>
                        <Logo />
                    </Box>

                    {/** Large Display: Buttons */}
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {entries.map((entry: PageEntry) => (
                            <Button key={entry.name} sx={{ color: '#fff' }} href={withPrefix(entry.link)}> {/** fff appears to be shorthand for ffffff */}
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
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            // Styles for the paper component inside Drawer
                            // color is the text color

                            boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#0a1628", color: "white"
                        },
                    }
                    }
                >
                    {/** Drawer contents component (to make the code cleaner)*/}
                    <DrawerContents handleDrawerToggle={handleDrawerToggle} />
                </Drawer>

            </Box>
        </Box >
    )
}

export default NavBar;