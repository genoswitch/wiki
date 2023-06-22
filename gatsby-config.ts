import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    assetBasePath: (process.env.ASSET_BASE_PATH || "https://static.igem.wiki/teams/4642/wiki/")
  
  },
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
      }
    }
  ],
}

export default config
