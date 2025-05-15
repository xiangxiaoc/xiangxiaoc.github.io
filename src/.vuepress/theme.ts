import {hopeTheme} from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import profile from "./profile.js";

export default hopeTheme({
    // 当前网站部署到的域名
    hostname: "https://xiangcheng.site",

    // 每篇文章显示作者和名字的点击链接
    // author: {
    //   name: "大橙",
    //   url: "https://www.xiangcheng.site",
    // },

    /*
    主题布局选项
    https://theme-hope.vuejs.press/zh/config/theme/layout.html
    */
    // 用于导航栏左侧首页小图和博客个人简介照片
    logo: "/orange_590x590.png",
    // 导航栏
    navbar,
    // 导航栏右侧项目源码仓库
    // repo: "xiangxiaoc/vuepress-theme-hope",

    // 侧边栏
    sidebar,

    // 页脚
    footer: `
        <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2023000655号</a> |
        由
        <a href="https://v2.vuepress.vuejs.org/zh/" target="_blank">
            <img alt=""
                src="/assets/images/vuepress.png"
                height="20px"
                style="vertical-align: bottom"
            />VuePress
        </a> 驱动 |
        主题采用
        <a href="https://theme-hope.vuejs.press/zh/" target="_blank" >
            <img alt=""
                src="/logo.svg"
                height="20px"
                style="vertical-align: bottom"
            />Hope
        </a>`,
    copyright: "Copyright © 2024 大橙",
    displayFooter: true,

    // 个人简介相关
    blog: profile,


    lastUpdated: true, // 是否显示页面最后更新时间
    docsDir: "src", // 文档目录，相对于项目根

    // 加密配置
    encrypt: {
        config: {
            // "/demo/encrypt.html": ["1234"],
        },
    },

    // 文档上方的面包屑路径
    breadcrumb: false,
    // 文档下方生成在 github 编辑的按钮
    editLink: false,
    // 多语言配置
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },

    // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
    // hotReload: true,

    markdown: {
        // https://theme-hope.vuejs.press/zh/config/markdown/code.html#markdown-demo
        demo: true,
        // https://theme-hope.vuejs.press/zh/config/markdown/grammar.html#markdown-tasklist
        tasklist: {
            disabled: false
        },
        // 通过 component 代码块快速添加组件。https://theme-hope.vuejs.press/zh/guide/component/grammar.html
        component: true,
        // https://theme-hope.vuejs.press/zh/config/markdown/behavior.html#markdown-vpre
        vPre: true,
        // https://theme-hope.vuejs.press/zh/config/markdown/grammar.html#markdown-include
        include: true,
        // https://theme-hope.vuejs.press/zh/config/markdown/stylize.html#markdown-align
        align: true,
        // https://theme-hope.vuejs.press/zh/config/markdown/stylize.html#markdown-attrs
        attrs: true,
        // https://theme-hope.vuejs.press/zh/config/markdown/stylize.html#markdown-mark
        mark: true,
        // https://theme-hope.vuejs.press/zh/config/markdown/stylize.html#markdown-spoiler
        spoiler: true,
        // https://theme-hope.vuejs.press/zh/config/markdown/stylize.html#markdown-sup
        sup: true,
        // https://theme-hope.vuejs.press/zh/config/markdown/stylize.html#markdown-sub
        sub: true,
        // https://theme-hope.vuejs.press/zh/guide/markdown/chart/plantuml.html#%E8%AE%BE%E7%BD%AE
        plantuml: true,
        // https://theme-hope.vuejs.press/zh/config/markdown/code.html#markdown-codetabs
        codeTabs: true,
        // https://theme-hope.vuejs.press/zh/config/markdown/stylize.html#markdown-stylize
        stylize: [
            {
                matcher: "Recommended",
                replacer: ({tag}) => {
                    if (tag === "em")
                        return {
                            tag: "Badge",
                            attrs: {type: "tip"},
                            content: "Recommended",
                        };
                },
            },
        ],
        imgLazyload: true,
        imgSize: true,
        figure: true,

        // 在启用之前安装 chart.js
        // chart: true,


        // insert component easily

        // 在启用之前安装 echarts
        // echarts: true,

        // 在启用之前安装 flowchart.ts
        // flowchart: true,

        // gfm requires mathjax-full to provide tex support
        // gfm: true,

        // 在启用之前安装 mermaid
        // mermaid: true,

        // playground: {
        //   presets: ["ts", "vue"],
        // },

        // 在启用之前安装 @vue/repl
        // vuePlayground: true,

        // install sandpack-vue3 before enabling it
        // sandpack: true,
    },
    // 在这里配置主题提供的插件
    plugins: {
        // 文档搜索功能插件
        docsearch: {
            /*
            https://dashboard.algolia.com/apps/O6UXOXHGTM/analytics/overview/xiangcheng_site_o6uxoxhgtm_pages?from=2025-05-06&to=2025-05-12
            https://crawler.algolia.com/admin/crawlers/ee85952a-3ad2-4517-a6fe-c1460f18e24c/overview
            npx create-instantsearch-app@latest instantsearch-app \
              --name 'instantsearch-app' \
              --template 'InstantSearch.js' \
              --app-id 'O6UXOXHGTM' \
              --api-key '1699595f4707927465c9b9537cb0a62a' \
              --index-name 'xiangcheng_site_o6uxoxhgtm_pages' \
              --attributes-to-display 'title,description,keywords' \
              --no-interactive \
              --image-attribute 'image'
             */
            appId: "O6UXOXHGTM",
            apiKey: "1699595f4707927465c9b9537cb0a62a",
            indexName: "xiangcheng_site_o6uxoxhgtm_pages"
        },

        icon: {
            // 关键词: "iconify", "fontawesome", "fontawesome-with-brands"
            // https://fontawesome.com/ 搜图标名
            assets: "fontawesome-with-brands",
        },


        // blog 配置 https://theme-hope.vuejs.press/zh/config/plugins/blog.html#excerptfilter
        blog: {
            // 自动生成摘要
            excerpt: true,
            // 过滤出是文章的目录
            filter: ({frontmatter, filePathRelative}) => {
                // 不是从 .md 文件生成的系统页面
                if (!filePathRelative) return false

                return filePathRelative.startsWith('posts/');

            },
        },

        // 启用之前需安装 @waline/client
        // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
        // comment: {
        //   provider: "Waline",
        //   serverURL: "https://waline-comment.vuejs.press",
        // },

        components: {
            components: [
                // https://plugin-components.vuejs.press/zh/guide/utilities/badge.html
                "Badge",
                // https://plugin-components.vuejs.press/zh/guide/content/card.html
                "VPCard",
                // https://plugin-components.vuejs.press/zh/guide/content/site-info.html#%E7%A4%BA%E4%BE%8B
                "SiteInfo"
            ],
        },

        // markdownMath: {
        //   // 启用前安装 katex
        //   type: "katex",
        //   // 或者安装 mathjax-full
        //   type: "mathjax",
        // },

        // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cacheImage: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },

        // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
        // revealjs: {
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
        // },
    },
    /*
    主题外观选项
    https://theme-hope.vuejs.press/zh/config/theme/appearance.html#pure
    */
    darkmode: "switch",
    externalLinkIcon: true,
    fullscreen: true,
    print: true,
}, {
    // https://theme-hope.vuejs.press/zh/config/theme/behavior.html
    check: true,
    compact: true,
    debug: false,
    checkVuePress: true,
});
