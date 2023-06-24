import * as React from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";

import { TeamBadges } from "./teamBadges";
import { TeamMemberNode } from "../../types/teamMemberNode";
import { TeamTagColourNode } from "../../types/teamTagColourNode";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type CreditEntryArgs = { member: TeamMemberNode; data: Queries.TeamPageDataQuery; key?: string };

interface CreditEntryState {
	isReady: boolean;
	showModal: boolean;
	modalIsReady: boolean;
}

export class CreditEntry extends React.Component<CreditEntryArgs, CreditEntryState> {
	assetBasePath: string;

	teamBadgeEntries: TeamTagColourNode[];

	constructor(props: CreditEntryArgs) {
		super(props);

		// Definitely assigned assetBasePath
		this.assetBasePath = props.data.site?.siteMetadata?.assetBasePath!;

		this.teamBadgeEntries = [];

		this.state = {
			isReady: false,
			showModal: false,
			modalIsReady: false,
		};
	}

	componentDidMount(): void {
		// Construct team badge entries
		// TeamBadgeEntry shares the same properties as coloursYaml
		// TODO: better name for TeamBadgeEntry given this / more docs?
		const defaultTagColour = this.props.data.allTeamTagColourYaml.nodes.find(
			(entry: TeamTagColourNode) => entry.tag == "default"
		)?.colour;

		this.props.member.tags.forEach(tag => {
			// Get the colour for the tag, else defaultNodeColoud
			const tagColour =
				this.props.data.allTeamTagColourYaml.nodes.find(
					(entry: TeamTagColourNode) => entry.tag == tag
				)?.colour || defaultTagColour;

			// Create and add anentry to teamBadgeEntries
			this.teamBadgeEntries.push({
				// ! - Assert that these are not null
				// Tells TS that even though this could be null, it is not.
				// More info on this operator: https://stackoverflow.com/a/57062363
				tag: tag!,
				colour: tagColour!,
			});
		});

		this.setState({ isReady: true });
	}

	render() {
		if (!this.state.isReady) {
			return <div>Loading... </div>;
		} else {
			if (this.state.showModal && !this.state.modalIsReady) {
				// Preload the modal image
				const image = new Image();
				image.onload = () => {
					this.setState({ modalIsReady: true });
				};
				image.src = this.assetBasePath + this.props.member.picturePath;
			}
			const image = getImage(this.props.member.dynamicImage!);
			return (
				<div style={{ padding: 16 }}>
					<Card>
						<Row>
							<div className="col-md-4" onClick={() => this.setState({ showModal: true })}>
								{/*<Card.Img src={this.assetBasePath + this.props.member.picturePath} />*/}
								<GatsbyImage image={image} />
							</div>
							<div className="col-md-8">
								<Card.Body>
									<Card.Title>{this.props.member.name}</Card.Title>
									{/* If this person has a title, display it under their name. Otherwise, don't display anything there. */}
									{this.props.member.title ? (
										<Card.Subtitle>{this.props.member.title}</Card.Subtitle>
									) : undefined}

									<TeamBadges tags={this.teamBadgeEntries} />
									<br />
									{/* Display the person's description */}
									{this.props.member.description}
								</Card.Body>
							</div>
						</Row>
					</Card>
					{/** Modal when clicking on the image for a higher res version. */}
					<Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
						<Modal.Header closeButton>
							<Modal.Title>{this.props.member.title}</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							{this.state.modalIsReady ? (
								<Card.Img src={this.assetBasePath + this.props.member.picturePath} />
							) : (
								<div>Loading...</div>
							)}
						</Modal.Body>
					</Modal>
				</div>
			);
		}
	}
}
