import * as React from "react";

import { graphql, PageProps } from "gatsby";

import { CreditEntry } from "../components/team/creditEntry";
import { TeamMemberNode } from "../types/graphql/teamMemberNode";
import {
	Checkbox,
	Chip,
	createTheme,
	FormControlLabel,
	MenuItem,
	SimplePaletteColorOptions,
	TextField,
	Theme,
	ThemeProvider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import update from "immutability-helper";

import { TeamTagColourNode } from "../types/graphql/teamTagColourNode";
import TeamTag from "../types/team/teamTag";
import ExtendablePalette from "../types/extendablePalette";
import { FilterChip, FilterChipEntry } from "../types/team/filterChip";

import capitalizeWords from "../capitalizeWords";
import teamEntryFilter from "../filters/teamEntryFilter";
import HeaderFooterProvider from "../components/headerFooterProvider";
import FilterMenu from "../components/team/filterMenu";
import LoadingPage from "../components/loadingPage";

import { Head as BaseHead } from "../components/head";

// TypeScript type def for the component state
// https://stackoverflow.com/questions/46987816/using-state-in-react-with-typescript
interface TeamPageState {
	isReady: boolean;
	searchQuery: string;
	filterChip: FilterChip;
	shouldIncludeTagsInSearch: boolean;
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
			filterChip: [],
			shouldIncludeTagsInSearch: true,
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
			});
			console.log(`Adding entry for '${member.name}'`);
			this.entries.push(
				<CreditEntry
					member={member}
					data={this.data}
					tags={this.discoveredTags}
					muiTheme={this.muiTheme!}
				/>
			);
		});

		// Add an entry to filterChip for each discovered tag.
		this.discoveredTags.forEach(tag => {
			this.state.filterChip.push({
				tag,
				enabled: false,
			});
		});

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

		const colour =
			this.props.data.allTeamTagColourYaml.nodes.find(
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
		return this.discoveredTags.find(entry => entry.name == tagName) == undefined;
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
				contrastText: "rgba(255,255,255,1)",
			};

			this.muiPaletteOptions[tag.paletteName] = colourOptions;

			// Recreate the palette
			this.muiTheme = createTheme({ palette: this.muiPaletteOptions });
		}
	}

	handleChipClick(event: React.SyntheticEvent<typeof Chip>, entry: FilterChipEntry) {
		//console.log("CHIP DISABLE");
		//debugger;

		// entry.enabled = xyz does not update the state
		const entryIndex = this.state.filterChip.indexOf(entry);

		console.log(this.state);
		this.setState({
			filterChip: update(this.state.filterChip, {
				[entryIndex]: { enabled: { $set: !this.state.filterChip[entryIndex].enabled } },
			}),
		});
	}

	handleShouldIncTagsChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({
			shouldIncludeTagsInSearch: event.target.checked,
		});
	}

	render(): React.JSX.Element {
		if (!this.state["isReady"]) {
			return <LoadingPage />;
		} else {
			console.log(this.muiPaletteOptions);
			return (
				<HeaderFooterProvider data={this.data}>
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
							<FilterMenu
								elements={this.state.filterChip.map(entry => {
									// Filter chips
									return (
										// onClick is on the MenuItem otherwis it only triggers when the chip itself is clicked.
										<MenuItem onClick={(event: any) => this.handleChipClick(event, entry)}>
											<Chip
												variant={entry.enabled ? "filled" : "outlined"}
												deleteIcon={entry.enabled ? <></> : <AddIcon />}
												label={capitalizeWords(entry.tag.name)}
												color={entry.tag.paletteName}
												size="small"
												sx={{ fontWeight: "bold" }}
											/>
										</MenuItem>
									);
								})}
							/>
							{/** Should be enclosed in FormGroup but that makes a newline. Shhh! */}
							<FormControlLabel
								control={
									<Checkbox
										defaultChecked
										onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
											this.handleShouldIncTagsChange(event)
										}
									/>
								}
								label="Include tags in search?"
							/>
						</div>
						{teamEntryFilter(
							this.entries,
							this.state.searchQuery,
							this.state.filterChip,
							this.state.shouldIncludeTagsInSearch
						)}
					</ThemeProvider>
				</HeaderFooterProvider>
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
				descriptionMd {
					plain
					html
				}
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
							outputPixelDensities: [0.25] # Generate 0.25x and 1x.
							# 1x is always created (see below)
							# https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#customizing-the-default-options:~:text=and%20will%20always%20include%20a%201x%20image.
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
	<BaseHead title="Our Team" description="Meet the team behind Genoswitch!" />
);
