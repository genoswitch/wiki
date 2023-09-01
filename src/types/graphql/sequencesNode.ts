import { NodeUnneededKeys } from "./nodeUnneededKeys";

import { SequencesAnnotationsNode } from "./sequencesAnnotations";

type SequencesNodeYaml = Omit<Queries.SequencesYaml, keyof NodeUnneededKeys>;

/**
 * {@link Queries.SequencesYaml} without GraphQL specific keys
 */
export interface SequencesNode extends Partial<Omit<SequencesNodeYaml, "annotations">> {
	annotations: SequencesAnnotationsNode[];
}
