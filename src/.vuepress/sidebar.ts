import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    /*
        对应导航栏的结构设计
        匹配到前缀就走展示侧边栏的规则
    */

    // 博客文章区
    "/posts/": "structure",

    // 笔记文档区
    "/notes/linux/": "structure",
    "/notes/CICD/": "structure",
    "/notes/python/": "structure",
    "/notes/golang/": "structure",

    // 其他
    // "/about/": "structure"
});
