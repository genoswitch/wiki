import * as React from "react";

import { graphql, PageProps } from "gatsby";

import { AttributionFrame } from "../components/attributionFrame";
import { Head as BaseHead } from "../components/head";
import HeaderFooterProvider from "../components/headerFooterProvider";
import LoadingPage from "../components/loadingPage";


// TypeScript type def for the component state
// https://stackoverflow.com/questions/46987816/using-state-in-react-with-typescript
interface AttributionsPageState {
	isReady: boolean;
}

export default class AttributionsPage extends React.PureComponent<
	PageProps<Queries.AttributionsPageDataQuery>,
	AttributionsPageState
> {
	data!: Queries.AttributionsPageDataQuery;

	constructor(props: PageProps<Queries.AttributionsPageDataQuery>) {
		super(props);

		this.state = {
			isReady: false,
		};
	}

	componentDidMount(): void {
		// Set this.data to the result of the query
		this.data = this.props.pageResources.json.data;

		this.setState({ isReady: true });
	}

	render(): React.JSX.Element {
		// The first render call is called before the graphQL query returns, so we need a loading state.

		if (!this.state.isReady) {
			return <LoadingPage />;
		} else {
			return (
				<HeaderFooterProvider data={this.data}>
					<AttributionFrame />
				</HeaderFooterProvider>
			);
		}
	}
}

export const query = graphql`
	query AttributionsPageData {
		site {
			...FooterSiteFragment
		}
		allSponsorYaml {
			...FooterSponsorYamlFragment
		}
		allProminentLogoYaml {
			...FooterProminentLogoYamlFragment
		}
		allPreviousYearsYaml {
			...FooterPreviousYearsYamlFragment
		}
	}
`;

export const Head = () => (
	<BaseHead
		title="Attributions"
		description="View the roles each member played in the project, as well as external contributors."
	/>
);
