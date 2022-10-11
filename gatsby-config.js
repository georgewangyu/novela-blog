module.exports = {
    siteMetadata: {
        title: `George Wang Blogs`,
        name: `George Wang`,
        siteUrl: `https://georgewangyu.me`,
        description: `A George Wang Blog Site`,
        hero: {
            heading: `Hey everyone. I'm George, a professional fun-haver and programmer.`,
            maxWidth: 700,
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
            resolve: `gatsby-plugin-disqus`,
            options: {
                shortname: `georgewangyu`
            }
        },
        {
            resolve: "@narative/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                basePath: "/",
                mailchimp: true,
                authorsPage: true,
                sources: {
                    local: true,
                    // contentful: true,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: 'https://georgewangyu.us6.list-manage.com/subscribe/post?u=dde006e6cae842dd2da8f9643&amp;id=895026c56d', // add your MC list endpoint here; see plugin repo for instructions
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
            options: {},
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-embed-video",
                        options: {
                            width: 800,
                            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                            height: 400, // Optional: Overrides optional.ratio
                            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                            noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
                            loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
                            urlOverrides: [
                                {
                                    id: "youtube",
                                    embedURL: videoId =>
                                        `https://www.youtube-nocookie.com/embed/${videoId}`,
                                },
                            ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
                            containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
                            iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
                        },
                    },
                ],
            },
        },
    ],
};
