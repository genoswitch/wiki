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
			{/** viewport is already set by Gatsby */}
			{children}
		</>
	);
};

export default SEO;
