import * as React from "react";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import Widths from "../../widths";

import DesktopFooter from "./desktop";
import MobileFooter from "./mobile";

import { graphql } from "gatsby";
import { FooterProps } from "./types/footerProps";

export const query = graphql`
	# Split into fragments that can be added to other pages' queries.
	# See team.tsx
	fragment FooterSponsorYamlFragment on SponsorYamlConnection {
		nodes {
			name
			url
			# static, higher res (original) image
			#logoPath
			# gatsby-plugin-image (using logoPath)
			dynamicImage {
				childImageSharp {
					gatsbyImageData(
						# Set by height, width props.
						#layout: FIXED
						width: 125
						# No placeholder image (team page has blurred placeholders)
						placeholder: NONE
						# WebP only.
						formats: [WEBP]
					)
				}
			}
		}
	}

	fragment FooterSiteFragment on Site {
		siteMetadata {
			sha
			assetBasePath
		}
	}
`;


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
