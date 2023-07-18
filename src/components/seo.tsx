import * as React from "react";

type SEOProps = {
	children?: React.JSX.Element;
	title: string;
	description: string;
};

const SEO = ({ children, title, description }: SEOProps) => {
	return (
		<>
			<title>{title}</title>
			<meta name="description" content={description} />

			{/** Google Webmaster Tools Site Verification so we can manage indexing on Google. */}
			<meta name="google-site-verification" content="kd28eSB57PmSeee40SHQh9M8YaNP1jzcR7avOs0aVpA" />

			{/** viewport is already set by Gatsby */}
			{children}
		</>
	);
};

export default SEO;
