import { NodeUnneededKeys } from "./nodeUnneededKeys";

/**
 * {@link Queries.TeamMemberYaml} without GraphQL specific keys
 */
export type TeamMemberNode = Omit<Queries.TeamMemberYaml, keyof NodeUnneededKeys>