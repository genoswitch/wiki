import * as React from "react";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import Widths from "../../widths";

import DesktopFooter from "./desktop";
import MobileFooter from "./mobile";

const Footer = () => {
	const { width } = useWindowDimensions();
	return (
		<>
			{/** iGEM 2022 Vilnius Lithuania: Use widths to determine which footer to display. */}
			{width && width >= Widths.MD ? <DesktopFooter /> : <MobileFooter />}
			Footer end.
		</>
	);
};

export default Footer;
