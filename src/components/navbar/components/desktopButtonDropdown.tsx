import * as React from "react";

import { Button, Menu, MenuItem, ThemeProvider, createTheme } from "@mui/material";

import NavigationEntry from "../types/navigationEntry";
import { navigate } from "gatsby";
import DesktopButtonEntry from "./desktopButtonEntry";

type DesktopButtonDropdownProps = {
    entry: NavigationEntry;
}


const DesktopButtonDropdown = ({ entry }: DesktopButtonDropdownProps) => {
    // 1. Create the dropdown

    const [anchorEl, setAnchorEl] = React.useState<null | EventTarget>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Create the theme to change the background color of the Paper in the menu
    const theme = createTheme({
        components: {
            MuiMenu: {
                styleOverrides: {
                    paper: {
                        // CSS
                        backgroundColor: "#0a1628"
                    }
                }
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <Button id={`desktopButtonDropdown-${entry.name}-button`}
                aria-controls={open ? `desktopButtonDropdown-${entry.name}-menu` : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {entry.name}
            </Button>

            <Menu id={`desktopButtonDropdown-${entry.name}-menu`} anchorEl={anchorEl} open={open} handleClose={handleClose} MenuListProps={{
                'aria-labelledby': `desktopButtonDropdown-${entry.name}-button`,
            }}>
                {entry.entries.map(entry => (<DesktopButtonEntry onClick={handleClose} type={"MenuItem"} entry={entry} />))}

            </Menu>
        </ThemeProvider>
    )


}

export default DesktopButtonDropdown;