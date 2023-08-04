import * as React from "react";
import NavBar from "./navbar";

import { Container } from "@mui/material";
import { MDXProvider } from "@mdx-js/react";

import Footer from "./footer";
import { graphql, useStaticQuery } from "gatsby";

import { Head as BaseHead } from "./head";
import ReferenceProvider from "./referenceProvider";

import Reference from "./reference";

// https://v3.gatsbyjs.com/docs/mdx/importing-and-using-components/#make-components-available-globally-as-shortcodes
const shortcodes = { Reference };

// GraphQL query containing fragments (sub-queries) for the footer
export const query = graphql`
	query MdxPageData {
		site {
			...FooterSiteFragment
		}
		allSponsorYaml {
			...FooterSponsorYamlFragment
		}
		allProminentLogoYaml {
			...FooterProminentLogoYamlFragment
		}
	}
`;

// Define a custom type so TypeScript understands what is being passed to the function
// Without a type, the "any" type is implicitly set.
// With a defined type, we can get autocomplete and whatnot from our IDE as well.
type MdxPageTemplatePropTypes = {
	pageContext: Queries.Mdx;
	children: React.JSX.Element[];
};

const MdxPageTemplate = ({ pageContext, children }: MdxPageTemplatePropTypes) => {
	const data2 = useStaticQuery(query);
	return (
		<>
			<NavBar />
			<br />
			<Container>
				<MDXProvider components={shortcodes}>{children}</MDXProvider>
				{pageContext.frontmatter!.references ? (
					<ReferenceProvider references={pageContext.frontmatter?.references} />
				) : undefined}
			</Container>
			<Footer data={data2} />
		</>
	);
};

export default MdxPageTemplate;

export const Head = (data: any) => (
	<BaseHead
		title={data.pageContext.frontmatter.name}
		description={data.pageContext.frontmatter.description}
	/>
);
