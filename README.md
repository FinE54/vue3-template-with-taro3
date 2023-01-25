# Vue3 起始 Taro 框架

使用 Vue3 搭建的初始 Taro 框架
框架使用了 Pinia、Taro Router Next、WindiCSS 等库进行开发构建，并且对 Request 进行结构化封装

引入 plugin-html 支持，可以直接在项目中使用 div / span 等标签，进一步降低 Web / 混合开发 间的差异

## 使用 Pinia

状态管理库使用 Pinia 替代 Vuex，使用与 Vue3 Web 项目一致，详情可参阅文档：[Pinia](https://pinia.vuejs.org/zh/introduction.html)

## 使用 WindiCSS

项目引入了 WindiCSS 进行原子化 CSS 开发，无需在编写冗长的 style 内容，使用与 Web 下 WindiCSS 一致，详细使用可参阅官方文档：[WindiCSS](https://windicss.org/)

由于 Taro 计算 rpx 的特性，WindiCSS 在 H5 端的样式会比小程序端尺寸更大（因为 H5 端，尺寸使用的 rem 进行计算，并且在根 HTML 上应用了一个 font-size，而 WindiCSS 插件在生成样式时已经进行了大小处理。）

框架在样式中覆盖了 Taro 应用在 HTML 上的 font-size，故建议 margin / padding / font-size 等涉及到尺寸计算的内容，全部通过使用 WindiCSS 进行设置应用（确保在多端下尺寸统一）。

## 使用 Taro Router Next 进行路由控制

本项目使用 Taro Router Next 替代 Taro 原装路由，在原基础上增加路由中间件，路由回退监听，路由返回值获取等特性，详情可参阅文档：[Taro Router Next](http://lblblib.gitee.io/tarojs-router-next/)

项目已封装了基本的跳转中间件、路由回退监听。

## 使用 Tarojs Request 

项目使用 Tarojs Request 封装的 request 进行请求，并简单配置了一套中间件用于修改：请求前配置、token 配置、响应数据修改、错误拦截，详情可参阅文档：[Tarojs Request](https://github.com/Niubility-Cool/tarojs-request)