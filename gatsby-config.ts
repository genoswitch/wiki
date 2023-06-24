import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		siteUrl: process.env.SITE_URL || "https://2023.igem.wiki/city-of-london-uk/",
		assetBasePath: process.env.ASSET_BASE_PATH || "https://static.igem.wiki/teams/4642/wiki/",
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
			resolve: "gatsby-plugin-remote-images",
			options: {
				nodeType: "TeamMemberYaml",
				imagePath: "picturePath",
				name: "dynamicImage",
				prepareUrl: (url: string) => `${config.siteMetadata.assetBasePath}${url}`,
			},
		},
	],
};

export default config;
