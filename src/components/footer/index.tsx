import * as React from "react";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import Widths from "../../widths";

import DesktopFooter from "./desktop";
import MobileFooter from "./mobile";

import { graphql } from "gatsby";

export const query = graphql`
	# Split into fragments that can be added to other pages' queries.
	# See team.tsx
	fragment FooterSponsorYamlFragment on SponsorYamlConnection {
		nodes {
			name
			logoPath
		}
	}

	fragment FooterSiteFragment on Site {
		siteMetadata {
			sha
			assetBasePath
		}
	}
`;

type FooterProps = {
	data: Queries.Query;
};

const Footer = ({ data }: FooterProps) => {
	const { width } = useWindowDimensions();
	return (
		<>
			{/** iGEM 2022 Vilnius Lithuania: Use widths to determine which footer to display. */}
			{width && width >= Widths.MD ? <DesktopFooter data={data} /> : <MobileFooter data={data} />}
		</>
	);
};

export default Footer;
