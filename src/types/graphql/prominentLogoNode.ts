import { NodeUnneededKeys } from "./nodeUnneededKeys";

/**
 * {@link Queries.ProminentLogoYaml} without GraphQL specific keys
 */
export type ProminentLogoNode = Omit<Queries.ProminentLogoYaml, keyof NodeUnneededKeys>;
