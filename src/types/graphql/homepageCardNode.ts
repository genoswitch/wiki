import { NodeUnneededKeys } from "./nodeUnneededKeys";

/**
 * {@link Queries.HomepageCardYaml} without GraphQL specific keys
 */
export type HomepageCardNode = Omit<Queries.HomepageCardYaml, keyof NodeUnneededKeys>;
