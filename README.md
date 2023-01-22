# Vue3 起始 Taro 框架

使用 Vue3 搭建的初始 Taro 框架
框架使用了 Pinia、Taro Router Next、WindiCSS 等库进行开发构建，并且对 Request 进行结构化封装

## 使用 Pinia

状态管理库使用 Pinia 替代 Vuex，使用与 Vue3 Web 项目一致，详情可参阅文档：[Pinia](https://pinia.vuejs.org/zh/introduction.html)

## 使用 WindiCSS

项目引入了 WindiCSS 进行原子化 CSS 开发，无需在编写冗长的 style 内容，使用与 Web 下 WindiCSS 一致，详细使用可参阅官方文档：[WindiCSS](https://windicss.org/)

## 使用 Taro Router Next 进行路由控制

本项目使用 Taro Router Next 替代 Taro 原装路由，在原基础上增加路由中间件，路由回退监听，路由返回值获取等特性，详情可参阅文档：[Taro Router Next](http://lblblib.gitee.io/tarojs-router-next/)
