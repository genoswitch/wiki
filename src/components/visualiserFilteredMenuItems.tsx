import * as React from "react";

import { MenuItem } from "@mui/material";

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
						{tag.name} - {sequenceDefinition.name}
					</MenuItem>
				))}
		</>
	);
};

export default VisualiserFilteredMenuItems;
