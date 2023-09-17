import * as React from "react";

import { navigate } from "gatsby";

import { CircularProgress } from "@mui/material";

// We have added a feature to SeqViz (3.9.1+) to allow for
// loading fonts locally instead of via Google Fonts
// https://github.com/Lattice-Automation/seqviz/pull/226
import { SeqViz } from "seqviz";

import { SequenceDefinitionNode } from "../types/graphql/sequenceDefintionNode";

interface VisualiserProps {
	sequenceDefinition: SequenceDefinitionNode;
	sequences: Queries.GeneticSequence[];
}

interface VisualiserState {
	seq: Queries.GeneticSequence | undefined;
}

export default class Visualiser extends React.Component<VisualiserProps, VisualiserState> {
	constructor(props: VisualiserProps) {
		super(props);

		this.state = {
			seq: undefined,
		};
	}

	// Run same code as componendDidUpdate
	async componentDidMount(): Promise<void> {
		await this.componentDidUpdate();
	}

	// TODO: this is somewhat sketch as it is run 2-3 times for an update.
	// However it is very quick.
	async componentDidUpdate(): Promise<void> {
		// Find the matching fasta file for the sequence.
		const match = this.props.sequences.find(
			seq => seq.filename == this.props.sequenceDefinition.filename
		);

		//const match = this.props.fastas.find((f => f.name == this.props.sequence.fastaFilename))

		// Check that match is different to avoid an infinite update loop
		// Updates when state is called!
		if (match && this.state.seq != match) {
			// Load the file.
			this.setState({ seq: match });

			navigate(`?sequence=${encodeURIComponent(match.filename || "unknown")}`);
		}
	}

	render(): React.ReactNode {
		if (!this.state.seq) {
			return <CircularProgress />;
		} else {
			// TODO: Attempts to make this use flexbox result in a height of 0.
			return (
				<div style={{ height: "75vh" }}>
					<SeqViz
						name={this.state.seq.name!}
						seq={this.state.seq.seq!}
						annotations={this.state.seq.annotations!}
						// Don't load fonts from external sources
						disableExternalFonts={true}
					/>
				</div>
			);
		}
	}
}
