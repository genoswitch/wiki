import * as React from "react";

import { CardMedia } from "@mui/material";

import LogoProps from "../types/logoProps";

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

export default AnimatedLogo;
