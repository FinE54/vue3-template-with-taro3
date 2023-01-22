import { registerMiddlewares, registerRouterBackListener } from 'tarojs-router-next'

/** @type {import('tarojs-router-next').Middleware} */
const middleWare = async (ctx, next) => {
    console.log('执行中间件', ctx.route.url)
    await next()
}

// 注册路由中间件
registerMiddlewares([middleWare])

// 注册路由返回监听
registerRouterBackListener((to, from) => {
    console.log(`页面返回：${from.url} =>> ${to.url}`)
})