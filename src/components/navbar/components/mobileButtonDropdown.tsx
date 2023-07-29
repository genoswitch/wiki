import * as React from "react";
import NavigationEntry from "../types/navigationEntry";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { withPrefix } from "gatsby";

type MobileButtonDropdownProps = {
    entry: NavigationEntry;
}

const MobileButtonDropdown = ({ entry }: MobileButtonDropdownProps) => {
    const [isOpen, setIsOpen] = React.useState<Boolean>(false);

    const onClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <ListItem key={entry.name} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }} onClick={onClick}>
                    <ListItemText primary={entry.name} />
                </ListItemButton>
            </ListItem>
            {entry.entries.map(subEntry => (
                <>
                    {isOpen && <ListItem key={subEntry.name} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }} href={withPrefix(subEntry.slug!)}>
                            <ListItemText primary={subEntry.name} />
                        </ListItemButton>
                    </ListItem>}
                </>
            ))}
        </>
    )
}

export default MobileButtonDropdown;