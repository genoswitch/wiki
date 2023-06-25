import * as React from "react";

import TeamTag from "../../types/teamTag";
import { Chip, Theme } from "@mui/material";
import capitalizeWords from "../../capitalizeWords";

const ConstructBadge = (tag: TeamTag): React.JSX.Element => {
	return (
		<span style={{ paddingRight: 16 }}>
			<Chip
				label={capitalizeWords(tag.name)}
				color={tag.paletteName}
				size="small"
				sx={{ fontWeight: "bold" }}
			/>
		</span>
	);
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
