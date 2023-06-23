// Team Badges class and support code from iGEM 2022.
// TODO: Refactor for 2023 (graphql badge colours)

import * as React from 'react';

import Badge from 'react-bootstrap/Badge'

const capitalizeWords = (words: string) => {
    const wordArray = words.split(' ');

    const processedArray = wordArray.map(item => {
        return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    });

    return processedArray.join(' ');
};

const ConstructBadge = (text: string, bgCol: string): React.JSX.Element => {
    return (
        <span style={{ paddingRight: 16 }}>
            <Badge bg={bgCol}>{capitalizeWords(text)}</Badge>
        </span>
    );
};

const tagColors = {
    wiki: 'dark',
    biology: 'success',
    'human practices': 'warning',
    hardware: 'info',
    modelling: 'danger',
    meow: 'secondary',
    leaders: 'primary',
};

export type TeamBadgesProps = { tags: string[] }

export class TeamBadges extends React.PureComponent<TeamBadgesProps, {}> {
    render() {
        const tagComponents: React.JSX.Element[] = [];
        if (this.props.tags) {
            this.props.tags.forEach((tag: string) => {
                tagComponents.push(ConstructBadge(tag, tagColors[tag]));
            });
            return <div style={{ paddingTop: 16 }}>{tagComponents}</div>;
        }
    }
}