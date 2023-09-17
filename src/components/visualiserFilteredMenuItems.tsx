import * as React from "react";

import { MenuItem } from "@material-tailwind/react";

import { SequenceDefinitionNode } from "../types/graphql/sequenceDefintionNode";
import { SequenceTag } from "../types/sequenceTag";

type VisualiserFilteredMenuItemsProps = {
	sequenceDefinitions: SequenceDefinitionNode[];
	tag: SequenceTag;
	onClick: Function;
};

const VisualiserFilteredMenuItems = ({
	sequenceDefinitions,
	tag,
	onClick,
}: VisualiserFilteredMenuItemsProps) => {
	return (
		<>
			{sequenceDefinitions
				.filter(x => x.tag == tag.tag)
				.map(sequenceDefinition => (
					<MenuItem value={sequenceDefinitions.indexOf(sequenceDefinition)} onClick={onClick}>
						{sequenceDefinition.name}
					</MenuItem>
				))}
		</>
	);
};

export default VisualiserFilteredMenuItems;
