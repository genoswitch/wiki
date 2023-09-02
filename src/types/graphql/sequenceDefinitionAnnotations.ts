import { NodeUnneededKeys } from "./nodeUnneededKeys";

/**
 * {@link Queries.SequencesYamlAnnotations} without GraphQL specific keys
 */
export type SequenceDefintionAnnotationsNode = Omit<
	Queries.SequencesYamlAnnotations,
	keyof NodeUnneededKeys
>;
