import { NodeUnneededKeys } from "./nodeUnneededKeys";

import { SequenceDefintionAnnotationsNode } from "./sequenceDefinitionAnnotations";

type SequencesNodeYaml = Omit<Queries.SequencesYaml, keyof NodeUnneededKeys>;

/**
 * {@link Queries.SequencesYaml} without GraphQL specific keys
 */
export interface SequenceDefinitionNode extends Partial<Omit<SequencesNodeYaml, "annotations">> {
	annotations: SequenceDefintionAnnotationsNode[];
}
