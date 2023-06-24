import * as React from "react";

import { graphql, PageProps } from "gatsby";

import "bootstrap/dist/css/bootstrap.min.css";
import { CreditEntry } from "../components/team/creditEntry";
import { TeamMemberNode } from "../types/teamMemberNode";
import { TextField } from "@mui/material";

import { TeamTagColourNode } from "../types/teamTagColourNode";
import TeamTag from "../types/teamTag";

// TypeScript type def for the component state
// https://stackoverflow.com/questions/46987816/using-state-in-react-with-typescript
interface TeamPageState {
	isReady: boolean;
	searchQuery: string;
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
			searchQuery: "",
		};
	}

	// TODO: Definitely assigned (!) - is this wise?
	data!: Queries.TeamPageDataQuery;

	entries: React.JSX.Element[] = [];

	discoveredTags: TeamTag[] = [];

	componentDidMount(): void {
		this.setState({ isReady: false });

		// Set this.data to the result of the query
		this.data = this.props.pageResources.json.data;

		// Iterate over each member and create a entry for each.
		this.data.allTeamMemberYaml.nodes.forEach((member: TeamMemberNode) => {
			// Iterate over each tag
			member.tags.forEach(tag => {
				// Tag is of type (GraphQL) Queries.Maybe<string>
				// If we are in this iterator, there is a tag here.
				// Therefore we can use the notnull operator (!).

				// Check if the tag has already been registered
				if (this.isTagRegistered(tag!)) {
					// Has not been registered! Let's register it.
					this.registerTag(tag!);
				}
			})
			console.log(`Adding entry for '${member.name}'`);
			this.entries.push(<CreditEntry member={member} data={this.data} />);
			this.setState({ isReady: true });
		});
	}

	// #region tag discovery helper functions

	/**
	 * Register the current tag.
	 * 
	 * This function retrieves the tag colour from the GraphQL response.
	 * 
	 * @param name tag name
	 */
	registerTag(name: string) {
		// Use the graphql query to determine the tag colour.
		console.log("Registering tag with name: " + name);

		// 1. Get the default colour.
		const defaultTagColour = this.props.data.allTeamTagColourYaml.nodes.find(
			(entry: TeamTagColourNode) => entry.tag == "default"
		)?.colour;

		// 2. Find the tag colour from the GraphQL query response,
		//	  Falling back to the default colour if a match is not found.

		const colour = this.props.data.allTeamTagColourYaml.nodes.find(
			(entry: TeamTagColourNode) => entry.tag == name
		)?.colour || defaultTagColour;

		// 3. Create a new TeamTag instance for this tag.
		// colour will never be null as we return defaultTagColour instead of null.
		const tag = new TeamTag(name, colour!);

		this.discoveredTags.push(tag)
	}

	/**
	 * Check if the given tag name is registered in the list of tags.
	 * 
	 * @param tagName tag name to check
	 */
	isTagRegistered(tagName: string) {
		return this.discoveredTags.find(entry => entry.name == tagName) == undefined
	}

	// #endregion

	render(): React.ReactNode {
		if (!this.state["isReady"]) {
			return <div>Preparing...</div>;
		} else {
			return (
				<div>
					{/**
					 * Search bar
					 * To match the entries, we pad the top and left of the containing div by 16px.
					 */}
					<div style={{ paddingTop: 16, paddingLeft: 16 }}>
						<TextField
							id="outlined-basic"
							label="Search"
							variant="outlined"
							onChange={event => this.setState({ searchQuery: event.target.value })}
						/>
					</div>
					{this.entries.filter(entry => {
						// Cast entry (React.JSX.Element to CreditEntry)
						const entryCast = entry as unknown as CreditEntry;

						// If the search query is empty (default state) allow everything
						if (this.state.searchQuery == "") {
							return true;
						}
						// Otherwise only return people whose names match the query string.
						else if (
							entryCast.props.member.name
								.toLowerCase()
								.includes(this.state.searchQuery.toLowerCase())
						) {
							return true;
						}
					})}
				</div>
			);
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
							placeholder: BLURRED
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
