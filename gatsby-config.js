module.exports = {
  siteMetadata: {
    title: `Nikolas Chapoupis`,
    author: `Nikolas Chapoupis`,
    description: `Persönlicher Blog von Nikolas Chapoupis. Effektiver Entscheiden.`,
    siteUrl: `https://nikolas-chapoupis.com/`,
    social: {
      twitter: `@nikolas_chap`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ein Blog von Nikolas Chapoupis`,
        short_name: `Nikolas Chapoupis`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#8be9fd`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://rwth-aachen.us20.list-manage.com/subscribe/post?u=c28fe8ebd02bbf5db01d87545&amp;id=60610b70a0", // see instructions section below
      },
    },
  ],
}
