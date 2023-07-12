import { NodeUnneededKeys } from "./nodeUnneededKeys";

/**
 * {@link Queries.SponsorYaml} without GraphQL specific keys
 */
export type SponsorNode = Omit<Queries.SponsorYaml, keyof NodeUnneededKeys>;
