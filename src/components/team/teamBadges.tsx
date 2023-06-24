import * as React from "react";

import BadgeCustomColours from "../bootstrap/BadgeCustomColours";

import TeamTag from "../../types/teamTag";
import { Chip, Theme } from "@mui/material";

const capitalizeWords = (words: string) => {
	const wordArray = words.split(" ");

	const processedArray = wordArray.map(item => {
		return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
	});

	return processedArray.join(" ");
};

const ConstructBadge = (tag: TeamTag): React.JSX.Element => {
	return (
		<span style={{ paddingRight: 16 }}>
			{/** Use bgCol and text to create a key.*/}

			<BadgeCustomColours key={`${tag.colour}-${tag.name}`} bg={tag.colour}>
				{capitalizeWords(tag.name)}
			</BadgeCustomColours>
			<Chip label={capitalizeWords(tag.name)} color={tag.paletteName} size="small" sx={{ fontWeight: "bold" }} />
		</span>
	);
};

const tagColors = {
	wiki: "dark",
	biology: "success",
	"human practices": "warning",
	hardware: "info",
	modelling: "danger",
	meow: "secondary",
	leaders: "primary",
};

export type TeamBadgesProps = { tags: TeamTag[]; muiTheme: Theme; sortAlphabetically?: boolean };

interface TeamBadgesState {
	isReady: boolean;
}

export class TeamBadges extends React.Component<TeamBadgesProps, TeamBadgesState> {
	tagComponents: React.JSX.Element[];

	constructor(props: TeamBadgesProps) {
		super(props);

		this.tagComponents = [];

		this.state = {
			isReady: false,
		};
	}

	// Tags is sometimes empty. problem upstream.
	componentDidMount(): void {
		if (this.props.tags) {
			if (this.props.sortAlphabetically) {
				// Sort tags alphabetically by tag name
				this.props.tags.sort((a, b) => {
					return a.name.localeCompare(b.name);
				});
			}

			// Iterate over each tag and construct a badge.
			this.props.tags.forEach(tag => {
				this.tagComponents.push(ConstructBadge(tag));
			});
		}
		this.setState({ isReady: true });
	}
	render() {
		if (this.state.isReady) {
			return (
				<div style={{ paddingTop: 16 }}>
					{this.tagComponents.map((component, index) => (
						<React.Fragment key={index}>{component}</React.Fragment>
					))}
				</div>
			);
		} else {
			return <div>Preparing...</div>;
		}
	}
}
