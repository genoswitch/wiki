import * as React from "react";
import SEO from "./seo";

type HeadProps = {
	children?: React.JSX.Element;
	title?: string;
	description?: string;
};

export const Head = ({ children, title, description }: HeadProps) => {
	let computedTitle = "Genoswitch (City of London UK)";
	if (title) {
		computedTitle = `${title} | ${computedTitle}`;
	}

	let computedDescription = "City of London School iGEM 2023 Wiki";
	if (description) {
		computedDescription = description;
	}

	return (
		<SEO title={computedTitle} description={computedDescription}>
			{children}
		</SEO>
	);
};
