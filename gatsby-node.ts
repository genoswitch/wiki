import fs from "fs";

import { Actions, GatsbyNode } from "gatsby";
import { CreatePagesQueryResult } from "./src/types/graphql/createPagesQueryResult";

// Import the page template
// https://www.gatsbyjs.com/docs/how-to/routing/mdx/#make-a-layout-template-for-your-posts
import path from "path";
const MdxPageTemplate = path.resolve("./src/components/mdxPageTemplate.tsx");

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

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
	// Query for all MDX pages
	const result: CreatePagesQueryResult = await graphql(`
		query CreatePages {
			allMdx {
				nodes {
					id
					frontmatter {
						slug
					}
					internal {
						contentFilePath
					}
				}
			}
		}
	`);

	if (result.errors) {
		reporter.panicOnBuild("Error loading MDX result", result.errors);
	}

	// Definitely assign data (If we got this far it will always have a value)
	const pageNodes = result.data!.allMdx.nodes;

	// Iterate over each page node
	pageNodes.forEach(node => {
		// Create the page
		actions.createPage({
			// Use the slug defined in the file as the path
			path: node.frontmatter!.slug!,
			// Use the template imported at the top of the file
			component: `${MdxPageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
		});
	});
};
