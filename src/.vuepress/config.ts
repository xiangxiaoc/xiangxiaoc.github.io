import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  // https://vuepress.vuejs.org/zh/reference/config.html

  // 部署站点的基础路径
  base: "/",

  lang: "zh-CN",
  // 左上角标题和博主简介标题
  title: "大橙的运维宝典",
  description: "大橙的个人博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  port: 2525
});
