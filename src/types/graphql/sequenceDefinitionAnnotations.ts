import { NodeUnneededKeys } from "./nodeUnneededKeys";

/**
 * {@link Queries.SequencesYamlAnnotations}
 */
export type SequenceDefintionAnnotationsNode = Omit<
	Queries.SequencesYamlAnnotations,
	keyof NodeUnneededKeys
>;
