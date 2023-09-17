import { NodeUnneededKeys } from "./nodeUnneededKeys";

/**
 * {@link Queries.PreviousYearsYaml} without GraphQL specific keys
 */
export type PreviousYearsNode = Omit<Queries.PreviousYearsYaml, keyof NodeUnneededKeys>;
