import * as React from "react";

import { Button, MenuItem } from "@mui/material";

import NavigationEntry from "../types/navigationEntry";
import { navigate } from "gatsby";

type DesktopButtonEntryProps = {
    entry: NavigationEntry;
    type: "Button" | "MenuItem",
    onClick?: Function
}

const DesktopButtonEntry = ({ entry, type, onClick: propsOnClick }: DesktopButtonEntryProps) => {
    const props = {
        key: entry.name,
        sx: { color: "#77d9dd" },
        onClick: () => {
            if (propsOnClick) {
                propsOnClick();
            }
            // gatsby-link navigate (for SPAs)
            // https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#how-to-use-the-navigate-helper-function
            navigate(entry.slug!);
        }
    }
    if (type == "Button") {
        return (
            <Button {...props}>
                {" "}
                {entry.name}
            </Button>
        )
    } else {
        // props apply to the dropdown
        return (
            <MenuItem {...props}>
                {" "}
                {entry.name}
            </MenuItem >
        )
    }
}

export default DesktopButtonEntry;