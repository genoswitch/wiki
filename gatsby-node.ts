import { GatsbyNode } from "gatsby"

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
    actions.createTypes(`
        # Define (override the auto-generated) the type for TeamMember

        # Opt out of type inferrance using @dontInfer
        # (https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/#opting-out-of-type-inference)
        # This means we must explicitly provide typedefs for each field.
        # The effect of this is that extra keys will be ignored by GraphQL.

        type TeamMember implements Node @dontInfer {
            # Non-nullable fields
            name: String!
            title: String!
            picturePath: String!
            tags: [String]!
            description: String!

            # Position is the only nullable (optional) field
            position: Int
        }
    
    `)
}