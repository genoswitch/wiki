import fs from "fs"

import { GatsbyNode } from "gatsby"

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
    // Import typedefs from file
    // Example: https://github.com/gatsbyjs/gatsby/blob/fd4d702bf3e969bed1289e62106314be9fd41345/examples/using-type-definitions/gatsby-node.js#L55
    const teamMemberTypeDef = fs.readFileSync("./src/graphql/teamMember.gql", { encoding: "utf-8" });
    actions.createTypes(teamMemberTypeDef);
}