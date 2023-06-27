import type { GatsbyConfig } from "gatsby";

import childProcess from "child_process";

const config: GatsbyConfig = {
	siteMetadata: {
		siteUrl: process.env.SITE_URL || "https://2023.igem.wiki/city-of-london-uk/",
		assetBasePath: process.env.ASSET_BASE_PATH || "https://static.igem.wiki/teams/4642/wiki/",
		// Use the git cli to get the latest commit hash.
		sha: childProcess.execSync("git rev-parse --verify HEAD").toString().trim(),
	},
	pathPrefix: process.env.PATH_PREFIX || "/city-of-london-uk",
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		{
			resolve: "gatsby-transformer-yaml",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: "./data/",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "mdxPages",
				path: "./pages/mdx/",
			},
		},
		{
			resolve: "gatsby-plugin-remote-images",
			options: {
				nodeType: "TeamMemberYaml",
				imagePath: "picturePath",
				name: "dynamicImage",
				prepareUrl: (url: string) => `${config.siteMetadata.assetBasePath}${url}`,
			},
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`, // Needed for dynamic images
		`gatsby-plugin-no-sourcemaps`,
		`gatsby-plugin-mdx`,
	],
};

export default config;
