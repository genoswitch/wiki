import * as React from "react";

import { navigate } from "gatsby";

import { CircularProgress } from "@mui/material";

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
	async componentDidMount(): Promise<void> {
		// Find the matching fasta file for the sequence.
		const match = this.props.sequences.find(
			seq => seq.filename == this.props.sequenceDefinition.filename
		);
		//const match = this.props.fastas.find((f => f.name == this.props.sequence.fastaFilename))
		if (match) {
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
					/>
				</div>
			);
		}
	}
}
