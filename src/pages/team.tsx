import * as React from "react";

import { graphql, PageProps } from "gatsby";

import "bootstrap/dist/css/bootstrap.min.css";
import { CreditEntry } from "../components/team/creditEntry";
import { TeamMemberNode } from "../types/teamMemberNode";

// TypeScript type def for the component state
// https://stackoverflow.com/questions/46987816/using-state-in-react-with-typescript
interface TeamPageState {
	isReady: boolean;
}

// Use React.PureComponent for TS types on this.props <https://github.com/gatsbyjs/gatsby/issues/8431#issue-362717669>
export default class TeamPage extends React.PureComponent<
	PageProps<Queries.TeamPageDataQuery>,
	TeamPageState
> {
	constructor(props: PageProps<Queries.TeamPageDataQuery>) {
		super(props);

		this.state = {
			isReady: false,
		};
	}

	// TODO: Definitely assigned (!) - is this wise?
	data!: Queries.TeamPageDataQuery;

	entries: React.JSX.Element[] = [];

	componentDidMount(): void {
		this.setState({ isReady: false });

		// Set this.data to the result of the query
		this.data = this.props.pageResources.json.data;

		// Iterate over each member and create a entry for each.
		this.data.allTeamMemberYaml.nodes.forEach((member: TeamMemberNode) => {
			console.log(`Adding entry for '${member.name}'`);
			this.entries.push(<CreditEntry member={member} data={this.data} />);
			this.setState({ isReady: true });
		});
	}
	render(): React.ReactNode {
		if (!this.state["isReady"]) {
			return <div>Preparing...</div>;
		} else {
			return <div>{this.entries}</div>;
		}
	}
}

/**
 * Get all team members (excluding the Example), ordered by position.
 * 
 * If position is null, the team member will be placed at the bottom of the list.
 * Note that at present the null-positioned members are not sorted alphabetically.

 */
export const query = graphql`
	query TeamPageData {
		allTeamMemberYaml(sort: { position: ASC }, filter: { name: { ne: "Example" } }) {
			nodes {
				name
				title
				description
				tags
				position
				# static, higher res image (used in the modal)
				picturePath
				# gatsby-plugin-image
				dynamicImage {
					childImageSharp {
						gatsbyImageData(
							width: 800 # 800x(~1200)
							placeholder: BLURRED,
							formats: [AUTO, WEBP, PNG]
						)
					}
				}
			}
		}
		allTeamTagColourYaml(filter: { tag: { ne: "example" } }) {
			nodes {
				colour
				tag
			}
		}
		site {
			siteMetadata {
				assetBasePath
			}
		}
	}
`;
