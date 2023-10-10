import * as React from "react";

import { PageProps, graphql } from "gatsby";

import { Container } from "@mui/material";

import NavBar from "../components/navbar";
import HomepageCard from "../components/homepage/card";
import Footer from "../components/footer";
import LoadingPage from "../components/loadingPage";

import { HomepageCardNode } from "../types/graphql/homepageCardNode";
import { Head as BaseHead } from "../components/head";
interface HomepageState {
	isReady: boolean;
}

export default class Homepage extends React.Component<
	PageProps<Queries.HomepageDataQuery>,
	HomepageState
> {
	constructor(props: PageProps<Queries.HomepageDataQuery>) {
		super(props);

		this.state = {
			isReady: false,
		};
	}

	data!: Queries.HomepageDataQuery;

	cards: HomepageCardNode[] = [];

	componentDidMount(): void {
		// Set this.data to the result of the query
		this.data = this.props.pageResources.json.data;

		this.cards = this.data.allHomepageCardYaml.nodes as HomepageCardNode[];

		this.setState({ isReady: true });
	}

	render(): React.ReactNode {
		if (!this.state.isReady) {
			return <LoadingPage />;
		} else {
			return (
				<div style={{ background: "#0a1628" }}>
					<NavBar />
					<img
						src="https://static.igem.wiki/teams/4642/wiki/logos/project/light-blue-animated.webp"
						style={{
							width: "100%",
							height: "auto",
							marginTop: "250px",
							marginBottom: "350px",
						}}
					/>
					<Container sx={{ width: "100vw" }}>
						{this.cards.map(card => (
							<div style={{ paddingBottom: "50px" }}>
								<HomepageCard card={card} assetBasePath={this.data.site?.siteMetadata?.assetBasePath!} />
							</div>
						))}
					</Container>
					<Footer data={this.data} />
				</div>
			);
		}
	}
}

export const query = graphql`
	query HomepageData {
		allHomepageCardYaml {
			nodes {
				name
				path
				picturePath
				description
			}
		}
		# Footer data
		site {
			siteMetadata {
				assetBasePath
			}
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
export const Head = () => <BaseHead title="Project GENOSWITCH - Home" description="TBD" />;
