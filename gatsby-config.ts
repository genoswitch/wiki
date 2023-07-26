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
		// #region Hacky workaround for proper canonical tags on pages served under a subfolder (such as on the wiki)
		// gatsby-plugin-canonical-urls does not support serving from a subfolder (such as /city-of-london-uk/)
		// https://github.com/gatsbyjs/gatsby/blob/e6e2fb4fddd1f076531b01ea2bd6fe4f43655f8c/packages/gatsby-plugin-canonical-urls/src/gatsby-ssr.js#L10
		{
			resolve: "gatsby-plugin-react-helmet",
		},
		{
			resolve: "gatsby-plugin-react-helmet-canonical-urls",
			options: {
				// No leading slash, added by the plugin (eg. root is / so subfolder would become subfolder/, team -> subfolder/team/)
				siteUrl: process.env.SITE_URL || "https://2023.igem.wiki/city-of-london-uk",
			},
		},
		// #endregion
		`@colliercz/gatsby-transformer-gitinfo`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`, // Needed for dynamic images
		`gatsby-plugin-no-sourcemaps`,
		`gatsby-plugin-mdx`,
	],
};

export default config;
