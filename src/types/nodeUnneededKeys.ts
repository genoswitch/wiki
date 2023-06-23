/**
 * When casting objects to a node, we do not want internal GraphQL keys to be required.
 * This interface is a list of unneeded keys that will be omitted when creating a (GraphQL Type)Node type.
 * 
 * @see {@link TeamMemberNode}
 */
export interface NodeUnneededKeys {
    children: unknown
    internal: unknown
    id: unknown,
    parent: unknown
}