module.exports = {
  siteMetadata: {
    title: `George Wang Blogs`,
    name: `George Wang`,
    siteUrl: `https://novela.narative.co`,
    description: `A George Wang Blog Site`,
    hero: {
      heading: `Hey everyone. I'm George, a professional fun-haver and programmer. I also make love sports, books, and making videos.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `youtube`,
        url: `https://www.youtube.com/channel/UCdEcstWVM6R0a48vt7zheSQ`,
      },
      {
        name: `github`,
        url: `https://github.com/georgewangyu`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/georgewangyu`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/georgewangyu/`,
      },
      {
        name: `facebook`,
        url: `https://www.facebook.com/georgewangyu/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
