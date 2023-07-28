import * as React from "react";

import { Button } from "@mui/material";

import NavigationEntry from "../types/navigationEntry";
import { navigate } from "gatsby";

type DesktopButtonEntryProps = {
    entry: NavigationEntry;
}

const DesktopButtonEntry = ({ entry }: DesktopButtonEntryProps) => (
    <Button
        key={entry.name}
        sx={{ color: "#77d9dd" }}
        onClick={() => {
            // gatsby-link navigate (for SPAs)
            // https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#how-to-use-the-navigate-helper-function
            navigate(entry.slug!);
        }}
    >
        {" "}
        {/** fff appears to be shorthand for ffffff */}
        {entry.name}
    </Button>
)

export default DesktopButtonEntry;