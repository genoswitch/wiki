import { NodeUnneededKeys } from "./nodeUnneededKeys";

/**
 * {@link Queries.SequencesYamlAnnotations}
 */
export type SequencesAnnotationsNode = Omit<
	Queries.SequencesYamlAnnotations,
	keyof NodeUnneededKeys
>;
