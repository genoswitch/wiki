import { NodeUnneededKeys } from "./nodeUnneededKeys";

/**
 * {@link Queries.TeamTagColourYaml} without GraphQL specific keys
 */
export type TeamTagColourNode = Omit<Queries.TeamTagColourYaml, keyof NodeUnneededKeys>