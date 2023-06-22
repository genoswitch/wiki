import * as React from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import { TeamBadges } from './teamBadges';
import { TeamMemberNode } from '../../types/teamMemberNode';

type CreditEntryArgs = { member: TeamMemberNode, assetBasePath: string }


export class CreditEntry extends React.Component<CreditEntryArgs, {}> {
    render() {
        return (
            <div style={{ padding: 16 }}>
                <Card>
                    <Row>
                        <div className="col-md-4">
                            <Card.Img src={this.props.assetBasePath + this.props.member.picturePath} />
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
                                <TeamBadges tags={this.props.member.tags} />
                            </Card.Body>
                        </div>
                    </Row>
                </Card>
            </div>
        );
    }
}