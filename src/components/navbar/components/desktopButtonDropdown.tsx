import * as React from "react";

import { Button, Menu, MenuItem } from "@mui/material";

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

    return (
        <>
            <Button aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                {entry.name}
            </Button>

            <Menu anchorEl={anchorEl} open={open} handleClose={handleClose} MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}>
                {entry.entries.map(entry => (<DesktopButtonEntry onClick={handleClose} type={"MenuItem"} entry={entry} />))}

            </Menu>
        </>
    )


}

export default DesktopButtonDropdown;