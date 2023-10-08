import fs from "fs";

import { Actions, GatsbyNode } from "gatsby";

import { StatsWriterPlugin } from "webpack-stats-plugin";

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
	createTypeFromFile(actions, "./src/graphql/previousYears.gql");
	createTypeFromFile(actions, "./src/graphql/sequencesAnnotations.gql");
	createTypeFromFile(actions, "./src/graphql/sequencesTranslations.gql");
	createTypeFromFile(actions, "./src/graphql/sequences.gql");
	createTypeFromFile(actions, "./src/graphql/sequenceTags.gql");
	createTypeFromFile(actions, "./src/graphql/homepageCard.gql");
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

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
	stage,
	actions,
	getConfig,
}) => {
	if (stage == "build-javascript") {
		const config = {
			...getConfig(),
			...{
				output: {
					...getConfig().output,
					...{
						filename: `[contenthash].js`,
						// default is [name]-[contenthash] which creates component-- which is shortened to component by static.igem.wiki
						// so we have to change it
						chunkFilename: `chunk-[contenthash].js`,
					},
				},
			},
		};

		// actions.setWebpackConfig does not apply to output
		// so we replace the webpack config instead
		// see https://github.com/gatsbyjs/gatsby/issues/9429#issuecomment-433407748
		actions.replaceWebpackConfig(config);

		actions.setWebpackConfig({
			plugins: [
				// RelativeCI: (bundle size analyzer) Add the stats writer plugin
				// https://relative-ci.com/documentation/guides/webpack-stats/gatsby
				new StatsWriterPlugin({
					filename: "../webpack-stats.json",
					stats: {
						assets: true,
						chunks: true,
						modules: true,
					},
				}),
			],
			// https://preactjs.com/guide/v10/getting-started#aliasing-react-to-preact
			resolve: {
				alias: {
					react: "preact/compat",
					"react-dom/test-utils": "preact/test-utils",
					"react-dom": "preact/compat", // Must be below test-utils
					"react/jsx-runtime": "preact/jsx-runtime",
				},
			},
		});
	}
};
