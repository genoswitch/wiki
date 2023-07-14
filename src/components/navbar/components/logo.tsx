import * as React from "react";

import LogoProps from "../types/logoProps";

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

export default Logo;