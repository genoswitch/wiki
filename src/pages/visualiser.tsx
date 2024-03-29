import * as React from "react";

import { graphql, PageProps } from "gatsby";

import { Button, Menu } from "@mui/material";

import HeaderFooterProvider from "../components/headerFooterProvider";
import LoadingPage from "../components/loadingPage";
import { SequenceDefinitionNode } from "../types/graphql/sequenceDefintionNode";
import Visualiser from "../components/visualiser";

import { Head as BaseHead } from "../components/head";
import { SequenceTag } from "../types/sequenceTag";
import VisualiserFilteredMenuItems from "../components/visualiserFilteredMenuItems";

import "../fonts/robotoMono.css";

type SelectOnChangeTarget = EventTarget & {
	value: number;
	name: string;
};

interface VisualiserPageState {
	isReady: boolean;
	sequenceIndex: number | undefined;
	anchorEl: EventTarget | null;
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
			anchorEl: null,
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
			const handleBtnClick = (event: MouseEvent) =>
				this.setState({ anchorEl: event.currentTarget });

			const handleClose = (event: MouseEvent) => {
				const target = event.target as SelectOnChangeTarget;

				this.setState({
					sequenceIndex: target.value,
					anchorEl: null,
				});
			};

			const isOpen = Boolean(this.state.anchorEl);

			return (
				<HeaderFooterProvider data={this.data}>
					<div style={{ padding: "25px" }}>
						<h1> Part Visualiser</h1>
						<p>
							This year, we have added a total of 60 parts to the registry. Our part visualiser
							allows you to view and explore our sequences in full detail, and the colour-coding
							labelling makes understanding the sequence easy and accessible.
						</p>
						<Button variant="contained" onClick={handleBtnClick}>
							Choose a Sequence...
						</Button>
						<Menu anchorEl={this.state.anchorEl as Element} open={isOpen} onClose={handleClose}>
							{/** Create a sub-menu for each tag */}
							{this.sequenceTags.map(tag => (
								<>
									{/** Map each entry with this tag **/}
									<VisualiserFilteredMenuItems
										sequenceDefinitions={this.sequenceDefinitions}
										tag={tag}
										onClick={handleClose}
									/>
								</>
							))}
						</Menu>
					</div>
					{/** Only show if sequenceIndex is set */}
					{this.state.sequenceIndex != undefined ? (
						<Visualiser
							sequenceDefinition={this.sequenceDefinitions[this.state.sequenceIndex]}
							sequences={this.sequences}
						/>
					) : undefined}
				</HeaderFooterProvider>
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
				translations {
					start
					end
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
				#subtags {
				#	name
				#	tag
				#}
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
