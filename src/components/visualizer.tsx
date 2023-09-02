import * as React from "react";

import { CircularProgress } from "@mui/material";

import seqparse, { Seq } from "seqparse";
import { SeqViz } from "seqviz";


import { SequenceDefinitionNode } from "../types/graphql/sequenceDefintionNode";
import { FastaFile } from "../types/graphql/fastaFile";

interface VisualizerProps {
    sequence: SequenceDefinitionNode;
    fastas: FastaFile[];
}

interface VisualizerState {
    seq: Seq | undefined;
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

        const match = this.props.fastas.find((f => f.name == this.props.sequence.fastaFilename))
        if (match) {
            // Load the file.
            const res = await fetch(match.publicURL!)
            if (res.status == 200) {
                const seq = await seqparse(await res.text());
                console.log(seq.name);

                this.setState({ seq: seq });
            }
        }
    }

    render(): React.ReactNode {
        if (!this.state.seq) {
            return <CircularProgress />
        } else {
            return (<div style={{ height: "100vh" }}>
                <SeqViz name={this.state.seq.name} seq={this.state.seq.seq} annotations={this.state.seq.annotations} />
            </div>)
        }
    }
}