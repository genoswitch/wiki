interface TeamMemberUnnnededKeys {
    children: unknown
    internal: unknown
    id: unknown,
    parent: unknown
}

/**
 * {@link Queries.TeamMember} without GraphQL specific keys
 */
export type TeamMemberNode = Omit<Queries.TeamMember, keyof TeamMemberUnnnededKeys>