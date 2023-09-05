import * as React from "react";

import { graphql, PageProps } from "gatsby";

import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";
import "../styles/tailwindcss-global.css";

import LoadingPage from "../components/loadingPage";
import NavBar from "../components/navbar";
import { SequenceDefinitionNode } from "../types/graphql/sequenceDefintionNode";
import Footer from "../components/footer";
import Visualiser from "../components/visualiser";

import { Head as BaseHead } from "../components/head";
import { SequenceTag } from "../types/sequenceTag";
import VisualiserFilteredMenuItems from "../components/visualiserFilteredMenuItems";

type SelectOnChangeTarget = EventTarget & {
	value: number;
	name: string;
};

interface VisualiserPageState {
	isReady: boolean;
	sequenceIndex: number | undefined;
}

export default class VisualiserPage extends React.Component<
	PageProps<Queries.VisualiserPageDataQuery>,
	VisualiserPageState
> {
	constructor(props: PageProps<Queries.VisualiserPageDataQuery>) {
		super(props);

		this.state = {
			isReady: false,
			sequenceIndex: undefined,
		};

		this.sequenceDefinitions = [];
		this.sequences = [];
		this.sequenceTags = [];
	}

	data!: Queries.VisualiserPageDataQuery;

	sequenceDefinitions: SequenceDefinitionNode[];
	sequences: Queries.GeneticSequence[];
	sequenceTags: SequenceTag[];

	componentDidMount(): void {
		// Set this.data to the result of the query
		this.data = this.props.pageResources.json.data;

		//this.data.fasta.nodes
		this.sequenceDefinitions = this.data.sequences.nodes as SequenceDefinitionNode[];

		this.sequences = this.data.allGeneticSequence.nodes as Queries.GeneticSequence[];

		this.sequenceTags = this.data.allSequenceTagsYaml.nodes as unknown as SequenceTag[];

		this.setState({ isReady: true });

		if (this.props.location.search.includes("?sequence=")) {
			// Find the entry corresponding to the filename in the query string.

			// Decode the URI component (%20 -> space)
			const filename = decodeURIComponent(this.props.location.search.split("?sequence=")[1]);

			const match = this.sequenceDefinitions.find(seq => seq.filename == filename);

			if (match) {
				this.setState({ sequenceIndex: this.sequenceDefinitions.indexOf(match) });
			} else {
				console.warn(
					"Query string used but no matching file found!. Acting as if no query string was passed."
				);
			}
		}
	}

	render(): React.ReactNode {
		if (!this.state.isReady) {
			return <LoadingPage />;
		} else {
			const handleClick = (e: MouseEvent) => {
				const target = e.target as SelectOnChangeTarget;
				this.setState({
					sequenceIndex: target.value,
				});
			};
			return (
				<>
					<NavBar />
					<br />
					<div style={{ padding: "25px" }}>
						<Menu>
							<MenuHandler>
								<Button>Choose a Sequence...</Button>
							</MenuHandler>
							<MenuList>
								{/** Create a sub-menu for each tag */}
								{this.sequenceTags.map(tag => (
									<Menu placement="right-start" offset={15}>
										<MenuHandler>
											<MenuItem>{tag.name}</MenuItem>
										</MenuHandler>
										<MenuList>
											{/**
											 * If tag.subtags is present, map it.
											 * Otherwise, use VisualiserFilteredMenuItems
											 * to create a list of menu items.
											 */}
											{tag.subtags
												? // Tag has sub-tags, create a sub-menu for each sub-tag
												// and map each entry with those tags
												tag.subtags.map(subTag => (
													// Only going one level deep for now
													// (tag) -> (subtag) -> entry
													<Menu placement="right-start" offset={15}>
														<MenuHandler>
															<MenuItem>{subTag.name}</MenuItem>
														</MenuHandler>
														<MenuList>
															<VisualiserFilteredMenuItems
																sequenceDefinitions={this.sequenceDefinitions}
																tag={subTag}
																onClick={handleClick}
															/>
														</MenuList>
													</Menu>
												))
												: undefined}
											{/** Map each entry with this tag **/}
											<VisualiserFilteredMenuItems
												sequenceDefinitions={this.sequenceDefinitions}
												tag={tag}
												onClick={handleClick}
											/>
										</MenuList>
									</Menu>
								))}
							</MenuList>
						</Menu>
					</div>
					{/** Only show if sequenceIndex is set */}
					{this.state.sequenceIndex != undefined ? (
						<Visualiser
							sequenceDefinition={this.sequenceDefinitions[this.state.sequenceIndex]}
							sequences={this.sequences}
						/>
					) : undefined}
					<Footer data={this.data} />
				</>
			);
		}
	}
}

export const query = graphql`
	query VisualiserPageData {
		sequences: allSequencesYaml {
			nodes {
				name
				filename
				tag
				annotations {
					name
					start
					end
					direction
					color
				}
			}
		}
		# Custom plugin to parse genetic sequences (gb, fasta)
		allGeneticSequence {
			nodes {
				seq
				type
				name
				filename
				annotations {
					type
					start
					name
					end
					direction
					color
				}
			}
		}
		allSequenceTagsYaml {
			nodes {
				name
				subtags {
					name
					tag
				}
				tag
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

export const Head = () => (
	<BaseHead
		title="Part Visualiser"
		description="Easily visualise the parts (and composites) used or created by GENOSWITCH."
	/>
);
