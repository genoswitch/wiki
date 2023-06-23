import fs from "fs";

import { Actions, GatsbyNode } from "gatsby";

/**
 * Import typedefs from file
 *
 * Example: https://github.com/gatsbyjs/gatsby/blob/fd4d702bf3e969bed1289e62106314be9fd41345/examples/using-type-definitions/gatsby-node.js#L55
 *
 * @param actions {@link Actions} paramater from {@link createSchemaCustomization}
 * @param filename The filename of a grahQL file to load and create types from.
 */
const createTypeFromFile = (actions: Actions, filename: string) => {
	const typeDef = fs.readFileSync(filename, { encoding: "utf-8" });
	actions.createTypes(typeDef);
};

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
	createTypeFromFile(actions, "./src/graphql/teamMember.gql");
	createTypeFromFile(actions, "./src/graphql/teamColour.gql");
};
