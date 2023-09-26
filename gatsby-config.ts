import type { GatsbyConfig, PluginRef } from "gatsby";

import childProcess from "child_process";

import ResolvePagesParams from "./src/types/gatsby-config/resolvePagesParams";
import Page from "./src/types/gatsby-config/page";

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
		// Include src/debug-pages only when using `gatsby develop`, not when using `gatsby build`
		// Source: https://github.com/gatsbyjs/gatsby/issues/17831#issuecomment-535176906
		...(process.env.NODE_ENV == "development"
			? [
					{
						resolve: "gatsby-plugin-page-creator",
						options: {
							path: `${__dirname}/src/debug-pages`,
						},
					},
			  ]
			: []),
		{
			// Allow for markdown (transformed to HTML) inside of yml values
			// Usage: markdown in team descriptions.
			resolve: "gatsby-transformer-yaml-full",
			options: {
				plugins: [
					{
						resolve: "gatsby-yaml-full-markdown",
						//options: {},
					},
				],
			},
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
			resolve: "gatsby-source-filesystem",
			options: {
				name: "tsxPages",
				path: "./src/pages/",
			},
		},
		{
			resolve: "gatsby-plugin-remote-images",
			options: {
				nodeType: "TeamMemberYaml",
				imagePath: "picturePath",
				name: "dynamicImage",
				// siteMetdata could be undefined, but is not in our use case, so use ! (definitely assigned)
				prepareUrl: (url: string) => `${config.siteMetadata!.assetBasePath}${url}`,
			},
		},
		{
			resolve: "gatsby-plugin-remote-images",
			options: {
				nodeType: "SponsorYaml",
				imagePath: "logoPath",
				name: "dynamicImage",
				// siteMetdata could be undefined, but is not in our use case, so use ! (definitely assigned)
				prepareUrl: (url: string) => `${config.siteMetadata!.assetBasePath}${url}`,
			},
		},
		{
			resolve: "gatsby-plugin-remote-images",
			options: {
				nodeType: "ProminentLogoYaml",
				imagePath: "logoPath",
				name: "dynamicImage",
				// siteMetdata could be undefined, but is not in our use case, so use ! (definitely assigned)
				prepareUrl: (url: string) => `${config.siteMetadata!.assetBasePath}${url}`,
			},
		},
		{
			resolve: "gatsby-plugin-remote-images",
			options: {
				nodeType: "HomepageCardYaml",
				imagePath: "picturePath",
				name: "dynamicImage",
				// siteMetdata could be undefined, but is not in our use case, so use ! (definitely assigned)
				prepareUrl: (url: string) => `${config.siteMetadata!.assetBasePath}${url}`,
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Genoswitch (City of London UK)",
				short_name: "Genoswitch",
				start_url: "/",

				// GENOSWITCH Dark Blue
				background_color: "#0a1628",
				theme_color: "#0a1628",

				display: "standalone",
				icon: "src/images/logo-light-blue-square-filled-nopadding.svg",
			},
		},
		{
			resolve: "gatsby-plugin-sitemap",
			options: {
				query: `{
					site {
            			siteMetadata {
              				siteUrl
            			}
          			}
					allSitePage {
    					nodes {
      						path
      						component
    					}
  					}
					allFile(filter: {sourceInstanceName: {regex: "/(tsxPage)|(mdxPage)/"}}) {
    					nodes {
      						fields {
        						gitLogLatestDate
      						}
      						absolutePath
   						}
  					}
				}`,
				// Use allFiles to embed last modified information in to each page node.
				resolvePages: ({
					allSitePage: { nodes: allPages },
					allFile: { nodes: allFiles },
				}: ResolvePagesParams) => {
					// allSitePage.nodes[x].component returns "{path-to-tsx}" for .tsx pages or
					// "{path-to-tsx}?__contentFilePath={path-to-mdx} for other pages (such as MDX.)"

					// Iterate over each site page
					return allPages.map(page => {
						let filename: string;

						// Determine which kind of page this is.
						if (page.component.includes("__contentFilePath")) {
							// This page is not a tsx page.
							// The filename can be extracted from page.component

							// Determine the file path from the component file path
							filename = page.component.split("__contentFilePath=")[1];
						} else {
							// This page is a tsx page.
							// The filename is in page.component
							filename = page.component;
						}

						// Find the corresponding file node using the filename
						const file = allFiles.find(file => file.absolutePath.includes(filename));

						// Check if a matching file was found
						if (file) {
							// Match found.
							// Set page lastmod to the git log latest date from the file node.
							page.lastmod = file.fields.gitLogLatestDate;
						}

						// Return the page element.
						return page;
					});
				},
				// Serialize a page node to the format gatsby-plugin-sitemap expects
				serialize: (page: Page) => {
					return {
						url: page.path,
						// If lastmod is present (is optional), return it.
						lastmod: page.lastmod,
					};
				},
			},
		},
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				// Works in production using `gatsby build --prefix-paths`
				siteUrl: `https://2023.igem.wiki/city-of-london-uk/`,
			},
		},
		// Self hosted fonts for SeqViz
		// External content (such as Google Fonts) not allowed as per iGEM rules
		{
			resolve: "gatsby-plugin-webfonts",
			options: {
				fonts: {
					google: [
						{
							family: "Roboto Mono",
							variants: ["300", "400", "500"],
							strategy: "selfHosted",
						},
					],
				},
			},
		},
		`@genoswitch/gatsby-transformer-gitinfo`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`, // Needed for dynamic images
		`gatsby-plugin-no-sourcemaps`,
		`gatsby-plugin-mdx`,
		`gatsby-transformer-genetic-sequences`, // Custom plugin to parse gb, fasta files.
		`gatsby-plugin-pnpm`, // configure webpack for pnpm dependency resolution
		`gatsby-plugin-postcss`, // for TailwindCSS for nested menu on src/pages/visualiser.tsx
	],
};

export default config;
