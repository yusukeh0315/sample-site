module.exports = {
  siteMetadata: {
    title: `ヤー・スペーステクノロジー`,
    description: `A simple Gatsby starter leveraging react-bootstrap and little else.`,
    author: `@mik3y`,
    siteUrl: `https://epic-mahavira-1bfdf3.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
        resolve: `gatsby-plugin-canonical-urls`,
        options: {
            siteUrl: `https://epic-mahavira-1bfdf3.netlify.app`,
            stripQueryString:true,
        },
    },
    {
        resolve: `gatsby-plugin-robots-txt`,
        options: {
            host: `https://epic-mahavira-1bfdf3.netlify.app`,
            sitemap: `https://epic-mahavira-1bfdf3.netlify.app/sitemap/sitemap-0.xml`,
            policy: [{userAgent: '*', allow: '/'}]
        },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      options: {
        name: `information`,
        path: `${__dirname}/src/content/information`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-basic-bootstrap`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require("path").resolve(__dirname, "node_modules")],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth:590,
                    },
                },
            ],
        },
    },
  ],
  pathPrefix: "gatsby-starter-basic-bootstrap",
};
