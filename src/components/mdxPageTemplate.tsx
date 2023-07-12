import * as React from "react";
import NavBar from "./navbar";
import { Container } from "@mui/material";
import Footer from "./footer";
import { graphql, useStaticQuery } from "gatsby";

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
	children: React.JSX.Element[];
};

const MdxPageTemplate = ({ children }: MdxPageTemplatePropTypes) => {
	const data = useStaticQuery(query);
	return (
		<>
			<NavBar />
			<br />
			<Container>{children}</Container>
			<Footer data={data} />
		</>
	);
};

export default MdxPageTemplate;
