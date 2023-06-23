import * as React from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import { TeamBadges } from './teamBadges';
import { TeamMemberNode } from '../../types/teamMemberNode';
import { TeamTagColourNode } from '../../types/teamTagColourNode';

type CreditEntryArgs = { member: TeamMemberNode, data: Queries.TeamPageDataQuery, key?: string }

interface CreditEntryState {
    isReady: boolean
}


export class CreditEntry extends React.Component<CreditEntryArgs, CreditEntryState> {
    assetBasePath: string;

    teamBadgeEntries: object[];

    constructor(props: CreditEntryArgs) {
        super(props);

        // Definitely assigned assetBasePath
        this.assetBasePath = props.data.site?.siteMetadata?.assetBasePath!

        this.teamBadgeEntries = [];

        this.state = {
            isReady: false
        }
    }

    componentDidMount(): void {
        // Construct team badge entries
        // TeamBadgeEntry shares the same properties as coloursYaml
        // TODO: better name for TeamBadgeEntry given this / more docs?
        const defaultTagColour = this.props.data.allTeamTagColourYaml.nodes.find((entry: TeamTagColourNode) => entry.tag == "default")?.colour

        this.props.member.tags.forEach(tag => {
            // Get the colour for the tag, else defaultNodeColoud
            const tagColour = this.props.data.allTeamTagColourYaml.nodes.find((entry: TeamTagColourNode) => entry.tag == tag)?.colour || defaultTagColour

            // Create and add anentry to teamBadgeEntries
            this.teamBadgeEntries.push({
                tag,
                colour: tagColour
            });

        })

        this.setState({ isReady: true })

    }

    render() {
        if (!this.state.isReady) {
            return <div>Loading... </div>
        } else {
            return (
                <div style={{ padding: 16 }}>
                    <Card>
                        <Row>
                            <div className="col-md-4">
                                <Card.Img src={this.assetBasePath + this.props.member.picturePath} />
                            </div>
                            <div className="col-md-8">
                                <Card.Body>
                                    <Card.Title>{this.props.member.name}</Card.Title>
                                    {/* If this person has a title, display it under their name. Otherwise, don't display anything there. */}
                                    {this.props.member.title ? (
                                        <Card.Subtitle>{this.props.member.title}</Card.Subtitle>
                                    ) : undefined}

                                    {/* Display the person's description */}
                                    <br />
                                    {this.props.member.description}
                                    <br />
                                    <TeamBadges tags={this.teamBadgeEntries} />
                                </Card.Body>
                            </div>
                        </Row>
                    </Card>
                </div>
            );
        }
    }
}