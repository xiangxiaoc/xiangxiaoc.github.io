import {navbar} from "vuepress-theme-hope";

export default navbar([
    // 默认主页按钮
    "/",

    // 默认 Demo 按钮
    // "/demo/",

    {
        text: "博客文章",
        icon: "file",
        link: "article/"
    },

    {
        text: "笔记文档区",
        icon: "book",
        children: [
            {
                text: "Linux",
                icon: "/assets/icon/linux.png",
                link: "linux/"
            },
            {
                text: "CI/CD",
                icon: "/assets/icon/CICD.png",
                link: "CICD/"
            },
            {
                text: "Python",
                icon: "/assets/icon/python.png",
                link: "python/"
            },
            {
                text: "Golang",
                icon: "/assets/icon/golang.png",
                link: "golang/"
            },
        ]
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
