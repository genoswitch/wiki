import type { GatsbyConfig, PluginRef } from "gatsby";

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
				resolvePages: ({ allSitePage: { nodes: allPages }, allFile: { nodes: allFiles } }) => {
					//debugger;

					// allSitePage.nodes[x].component returns "{path-to-tsx}" for .tsx pages or
					// "{path-to-tsx}?__contentFilePath={path-to-mdx} for other pages (such as MDX.)"

					type Page = {
						component: string;
						path: string;
					};

					// Iterate over each site page
					return allPages.map((page: Page) => {
						let filename: string;
						if (page.component.includes("__contentFilePath")) {
							// This page is not a tsx page.

							// Determine the file path from the component paht
							filename = page.component.split("__contentFilePath=")[1];
						} else {
							// This page is a tsx page.
							filename = page.component;
						}

						const file = allFiles.find(file => file.absolutePath.includes(filename));

						if (file) {
							// Match found.
							page.lastmod = file.fields.gitLogLatestDate;
						}

						return page;
					});
				},
				serialize: page => {
					if (page.lastmod) {
						return {
							url: page.path,
							lastmod: page.lastmod,
						};
					} else {
						return {
							url: page.path,
						};
					}
				},
			},
		},
		`@colliercz/gatsby-transformer-gitinfo`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`, // Needed for dynamic images
		`gatsby-plugin-no-sourcemaps`,
		`gatsby-plugin-mdx`,
	],
};

export default config;
