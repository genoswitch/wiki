import * as React from "react";

import { graphql, PageProps } from "gatsby";

import "bootstrap/dist/css/bootstrap.min.css";
import { CreditEntry } from "../components/team/creditEntry";
import { TeamMemberNode } from "../types/teamMemberNode";
import { Chip, createTheme, SimplePaletteColorOptions, TextField, Theme, ThemeProvider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import update from 'immutability-helper';


import { TeamTagColourNode } from "../types/teamTagColourNode";
import TeamTag from "../types/teamTag";
import ExtendablePalette from "../types/extendablePalette";
import { FilterChip, FilterChipEntry } from "../types/filterChip";

import capitalizeWords from "../capitalizeWords";

// TypeScript type def for the component state
// https://stackoverflow.com/questions/46987816/using-state-in-react-with-typescript
interface TeamPageState {
	isReady: boolean;
	searchQuery: string;
	filterChip: FilterChip;
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
			filterChip: []
		};
	}

	// TODO: Definitely assigned (!) - is this wise?
	data!: Queries.TeamPageDataQuery;

	entries: React.JSX.Element[] = [];

	discoveredTags: TeamTag[] = [];

	muiTheme: Theme | undefined = undefined;
	muiPaletteOptions: ExtendablePalette = {};

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
			this.entries.push(<CreditEntry member={member} data={this.data} tags={this.discoveredTags} muiTheme={this.muiTheme!} />);
		});

		// Add an entry to filterChip for each discovered tag.
		this.discoveredTags.forEach(tag => {
			this.state.filterChip.push({
				tag,
				enabled: true
			})
		})

		// Evertything is done! Update the state.
		this.setState({ isReady: true });
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

		// 4. TeamTag creates a paletteColour attribute, a unique key
		//	  to identify this colour and tag combination.
		//	  We will now add this to our material UI palette.
		this.addTagToThemePalette(tag);

		this.discoveredTags.push(tag);
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

	// TODO: is it possible to have one theme and change it's Palette instead.
	// There *is* a palette class and createPalette.
	addTagToThemePalette(tag: TeamTag) {
		// Check if the tag has already been added to the palette.
		// In theory this should never be called when it's already added but it's good practice to check.
		if (!this.muiPaletteOptions[tag.paletteName]) {
			// Tag has not been added to the palette

			// Add the tag to the palette
			// Provide every color token (light, main, dark, and contrastText) when using
			// Create a palette entry.
			// As a custom colour, we must provide every color token.
			// Reference: https://mui.com/material-ui/customization/palette/#adding-new-colors
			const colourOptions: SimplePaletteColorOptions = {
				main: tag.colour,
				light: tag.colour,
				dark: tag.colour,
				contrastText: "rgba(255,255,255,1)"
			}

			this.muiPaletteOptions[tag.paletteName] = colourOptions;

			// Recreate the palette
			this.muiTheme = createTheme({ palette: this.muiPaletteOptions })

		}
	}

	handleChipClick(event: React.SyntheticEvent<typeof Chip>, entry: FilterChipEntry) {
		//console.log("CHIP DISABLE");
		//debugger;


		// entry.enabled = xyz does not update the state
		const entryIndex = this.state.filterChip.indexOf(entry)

		console.log(this.state)
		this.setState({
			filterChip: update(this.state.filterChip, { [entryIndex]: { enabled: { $set: !this.state.filterChip[entryIndex].enabled } } })
		})


	}

	render(): React.ReactNode {
		if (!this.state["isReady"]) {
			return <div>Preparing...</div>;
		} else {
			console.log(this.muiPaletteOptions)
			return (
				<ThemeProvider theme={this.muiTheme!}>
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
						{/**
						 * Filter chips
						 */}
						{this.state.filterChip.map(entry => {
							if (entry.enabled) {
								return <span style={{ paddingLeft: 16 }}>
									<Chip onClick={(event: any) => this.handleChipClick(event, entry)} label={capitalizeWords(entry.tag.name)} color={entry.tag.paletteName} size="small" sx={{ fontWeight: "bold" }} />
								</span>
							} else {
								return <span style={{ paddingLeft: 16 }}>
									<Chip variant="outlined" deleteIcon={<AddIcon />} onClick={(event: any) => this.handleChipClick(event, entry)} label={capitalizeWords(entry.tag.name)} color={entry.tag.paletteName} size="small" sx={{ fontWeight: "bold" }} />
								</span>
							}
						})}
					</div>
					{
						this.entries.filter(entry => {
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
						})
					}
				</ThemeProvider>
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
