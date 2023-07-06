import * as React from "react";

import { TeamBadges } from "./teamBadges";
import { TeamMemberNode } from "../../types/graphql/teamMemberNode";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";

import TeamTag from "../../types/team/teamTag";
import { Card, Theme, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

type CreditEntryArgs = {
	member: TeamMemberNode;
	data: Queries.TeamPageDataQuery;
	tags: TeamTag[];
	muiTheme: Theme;
};

interface CreditEntryState {
	showModal: boolean;
	modalIsReady: boolean;
}

export class CreditEntry extends React.Component<CreditEntryArgs, CreditEntryState> {
	assetBasePath: string;

	constructor(props: CreditEntryArgs) {
		super(props);

		// Definitely assigned assetBasePath
		this.assetBasePath = props.data.site?.siteMetadata?.assetBasePath!;

		this.state = {
			showModal: false,
			modalIsReady: false,
		};
	}

	render() {
		if (this.state.showModal && !this.state.modalIsReady) {
			// Preload the modal image
			const image = new Image();
			image.onload = () => {
				this.setState({ modalIsReady: true });
			};
			image.src = this.assetBasePath + this.props.member.picturePath;
		}
		// To make TS happy, use the notNull assertion for dynamicImage as well as getImage's return value.
		// Also cast dynamicImage to ImageDataLike (mismatched so must cast to unknown first.)
		const image = getImage(this.props.member.dynamicImage! as unknown as ImageDataLike)!;
		return (
			<div style={{ padding: 16 }}>
				<Card raised>
					<Grid container spacing={2}>
						<Grid xs={4}>
							<div onClick={() => this.setState({ showModal: true })}>
								{/*<Card.Img src={this.assetBasePath + this.props.member.picturePath} />*/}
								<GatsbyImage image={image} alt={`${this.props.member.name}'s picture.`} />
							</div>
						</Grid>
						<Grid xs={8} style={{ paddingTop: 16 }}>
							<Typography variant="h5">{this.props.member.name}</Typography>

							{/* If this person has a title, display it under their name. Otherwise, don't display anything there. */}
							{this.props.member.title ? (
								<Typography variant="h6">{this.props.member.title}</Typography>
							) : undefined}

							{/* Important: make sure the key prop is set to avoid React displaying the wrong component instance! */}
							<TeamBadges
								key={`TeamBadges-${this.props.member.name}=$${this.props.member.tags}`}
								tags={this.props.member.tags.map(tagName => {
									// Use this.props.tags (TeamTag[]) to look up the TeamTag instance for this tag.
									// This instance includes the tag colour.
									// All in-use tags are registered in team.tsx.
									// Therefore, we can notNull the find response.
									const tag = this.props.tags.find(t => t.name == tagName)!;

									return tag;
								})}
								muiTheme={this.props.muiTheme}
							/>

							{/* Display the person's description */}
							<br />
							{this.props.member.description}
						</Grid>
					</Grid>

				</Card>
			</div>
		);
	}
}
