import * as React from "react";

import { graphql, PageProps } from "gatsby";


import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

import LoadingPage from "../components/loadingPage";
import NavBar from "../components/navbar";
import { SequenceDefinitionNode } from "../types/graphql/sequenceDefintionNode";
import Footer from "../components/footer";
import Visualizer from "../components/visualizer";

type SelectOnChangeTarget = (EventTarget & {
    value: number;
    name: string;
})

interface VisualzierPageState {
    isReady: boolean;
    sequenceIndex: number | undefined;
}

export default class VisualizerPage extends React.Component<PageProps<Queries.VisualizerPageDataQuery>, VisualzierPageState> {
    constructor(props: PageProps<Queries.VisualizerPageDataQuery>) {
        super(props);

        this.state = {
            isReady: false,
            sequenceIndex: undefined
        }

        this.sequenceDefinitions = [];
    }

    data!: Queries.VisualizerPageDataQuery;

    sequenceDefinitions: SequenceDefinitionNode[];

    componentDidMount(): void {
        // Set this.data to the result of the query
        this.data = this.props.pageResources.json.data;

        //this.data.fasta.nodes
        this.sequenceDefinitions = this.data.sequences.nodes as SequenceDefinitionNode[];

        this.setState({ isReady: true });
    }

    render(): React.ReactNode {
        if (!this.state.isReady) {
            return <LoadingPage />
        } else {
            let selection: SequenceDefinitionNode | undefined = undefined;
            return (
                <>
                    <NavBar />
                    <br />
                    <div style={{ padding: "25px" }}>
                        <FormControl variant="standard" style={{ width: "200px" }}>
                            <InputLabel id="viz-select-label">Sequence</InputLabel>
                            <Select
                                labelId="viz-select-label"
                                id="viz-select"
                                value={this.state.sequenceIndex || undefined}
                                onChange={(event: SelectChangeEvent<number>) => {
                                    const target = event.target as SelectOnChangeTarget;
                                    this.setState({
                                        sequenceIndex: target.value
                                    });
                                }}
                            >
                                {this.sequences.map(sequence =>
                                    (<MenuItem value={this.sequences.indexOf(sequence)}>{sequence.name}</MenuItem>)
                                )}
                            </Select>
                        </FormControl>
                    </div >
                    {/** Only show if sequenceIndex is set */}
                    {this.state.sequenceIndex != undefined ? <Visualizer sequence={this.sequences[this.state.sequenceIndex]} fastas={this.data.fasta.nodes} /> : undefined}
                    <Footer data={this.data} />
                </>
            )
        }
    }
}

export const query = graphql`
    query VisualizerPageData {
        sequences: allSequencesYaml {
            nodes {
                name
                fastaFilename
                annotations {
                    name
                    start
                    end
                    direction
                    color
                }
            }
        }  
        fasta: allFile(
            filter: {extension: {eq: "fasta"}, relativeDirectory: {eq: "sequences"}}
        ) {
            nodes {
                name
                publicURL
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
    }
`