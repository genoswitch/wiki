import * as React from "react";

import { CircularProgress } from "@mui/material";

import { SeqViz } from "seqviz";

import { SequenceDefinitionNode } from "../types/graphql/sequenceDefintionNode";

interface VisualizerProps {
    sequenceDefinition: SequenceDefinitionNode;
    sequences: Queries.GeneticSequence[];
}

interface VisualizerState {
    seq: Queries.GeneticSequence | undefined;
}

export default class Visualizer extends React.Component<VisualizerProps, VisualizerState> {
    constructor(props: VisualizerProps) {
        super(props);

        this.state = {
            seq: undefined
        }
    }
    async componentDidMount(): Promise<void> {
        // Find the matching fasta file for the sequence.
        const match = this.props.sequences.find(seq => seq.parent!.name == this.props.sequenceDefinition.fastaFilename)
        //const match = this.props.fastas.find((f => f.name == this.props.sequence.fastaFilename))
        if (match) {
            // Load the file.
            this.setState({ seq: match });
        }
    }

    render(): React.ReactNode {
        if (!this.state.seq) {
            return <CircularProgress />
        } else {
            return (<div style={{ height: "100vh" }}>
                <SeqViz name={this.state.seq.name!} seq={this.state.seq.seq!} annotations={this.state.seq.annotations!} />
            </div>)
        }
    }
}