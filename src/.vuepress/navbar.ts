import {navbar} from "vuepress-theme-hope";

export default navbar([
    // 默认主页按钮
    "/",

    // 默认 Demo 按钮
    // "/demo/",

    {
        text: "博客文章",
        link: "article/",
        icon: "book"
    },
    {
        text: "Linux",
        prefix: "/linux",
        icon: "/assets/icon/linux.png",
        children: [
            "Shell/",
            "命令行工具/",
            "应用服务/"
        ],
    },
    {
        text: "CI/CD",
        prefix: "/cicd",
        icon: "/assets/icon/CICD.png",
        children: [
            "Jenkins/",
            "Gitlab CI/",
            "Argo CD/",
        ]
    },
    {
        text: "Python",
        prefix: "/python",
        icon: "/assets/icon/python.png",
        children: [
            "Django/",
            "三方库/",
            "内置库/",
            "协程/",
        ],
    },
    {
        text: "Golang",
        prefix: "/golang",
        icon: "/assets/icon/golang.png",
        children: [
            "三方库/",
            "代码特性/",
            "工程化/",
        ],
    },
    {
        text: "关于",
        icon: "circle-info",
        prefix: "/about",
        children: [
            {text: "关于我", icon: "user", link: "intro"},
            {text: "关于本站", icon: "globe", link: "site"},
        ]
    },

    {
        text: "推荐",
        link: "recommend",
        icon: "link"
    }
    // 外链按钮示例
    // {
    //   text: "V2 文档",
    //   icon: "book",
    //   link: "https://theme-hope.vuejs.press/zh/",
    // },
]);
