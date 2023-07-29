import * as React from "react";
import NavigationEntry from "../types/navigationEntry";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { withPrefix } from "gatsby";

type MobileButtonEntryProps = {
    entry: NavigationEntry;
}

const MobileButtonEntry = ({ entry }: MobileButtonEntryProps) => (
    <ListItem key={entry.name} disablePadding>
        <ListItemButton sx={{ textAlign: "center" }} href={withPrefix(entry.slug!)}>
            <ListItemText primary={entry.name} />
        </ListItemButton>
    </ListItem>
)

export default MobileButtonEntry;