import * as React from "react";

import BadgeCustomColours from "../bootstrap/BadgeCustomColours";

import TeamTag from "../../types/teamTag";

const capitalizeWords = (words: string) => {
	const wordArray = words.split(" ");

	const processedArray = wordArray.map(item => {
		return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
	});

	return processedArray.join(" ");
};

const ConstructBadge = (text: string, bgCol: string): React.JSX.Element => {
	// Check if bgcol is a hex value. If so, add a '#'.
	if (/^[0-9A-F]{6}$/i.test(bgCol)) {
		// Regex based on https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
		bgCol = `#${bgCol}`;
	}
	return (
		<span style={{ paddingRight: 16 }}>
			{/** Use bgCol and text to create a key.*/}

			<BadgeCustomColours key={`${bgCol}-${text}`} bg={bgCol}>
				{capitalizeWords(text)}
			</BadgeCustomColours>
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

export type TeamBadgesProps = { tags: TeamTag[]; sortAlphabetically?: boolean };

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
				this.tagComponents.push(ConstructBadge(tag.name, tag.colour));
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
