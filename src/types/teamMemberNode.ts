interface TeamMemberUnnnededKeys {
    children: unknown
    internal: unknown
    id: unknown,
    parent: unknown
}

/**
 * {@link Queries.TeamMemberYaml} without GraphQL specific keys
 */
export type TeamMemberNode = Omit<Queries.TeamMemberYaml, keyof TeamMemberUnnnededKeys>