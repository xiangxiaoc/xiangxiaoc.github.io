---
home: true # 显示首页
layout: Blog

# 导航栏主页图标
icon: home
# 导航栏主页文案描述
title: 主页

# 首页封面图全屏
heroFullScreen: true

# 首页封面图内 Logo 图片
#heroImage: /logo.png
# 设置封面图内主标题，不设置则使用 config.ts title 的值
heroText: 不积跬步，无以至千里。
# 设置封面图内设置副标题
tagline: '<em style="text-shadow: 2px 2px 4px gray; font-size: 25px">What you earn depends on what you learn.</em>'

bgImage: assets/images/塞尔达.jpeg
bgImageDark: assets/images/鸣潮-守岸人.jpg

# 项目卡片
projects:
  - name: nvidia-docker 开发套装
    desc: 脚本离线安装支持 NVIDIA GPU 的 Docker 套装
    link: https://github.com/xiangxiaoc/docker-ce_docker-compose_nvidia-docker2
    icon: lightbulb

  - name: docker-compose 编排整合
    desc: 通过 docker-compose 快速部署容器化服务
    link: https://github.com/xiangxiaoc/docker-apps
    icon: file

  - name: k8s_ansible
    desc: ansible 部署 kubernetes 集群
    link: https://github.com/xiangxiaoc/kubernetes_ansible
    icon: file

# 首页 footer，不设置则使用 config.ts footer 的值
#footer: <a href="http://beian.miit.gov.cn/">浙ICP备2023000655号</a>
---
