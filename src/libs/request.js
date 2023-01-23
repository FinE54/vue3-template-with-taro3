import { extend, AbortController } from 'tarojs-request'

import { baseURL, successCode, noPermissionCode } from '@src/config'
import { token } from '@src/utils/storage'

// 创建用于终止请求的 Controller
const abortController = new AbortController()
// 创建用于进行错误处理的函数
const errorHandler = (error) => {
    // 如果是请求抛出的错误，如：链接错误、网络错误等，则会被此捕获
    if (error instanceof Error) {
        throw error
    } else {
        const { code, msg } = error
        if (noPermissionCode.includes(code)) {
            console.error('无权限访问')
        } else {
            console.error('其他错误')
        }
        throw new Error(msg)
    }
}

// 请求的中间件函数内容
/** @type {typeof import('tarojs-request').networkCheckMiddleware} */
const responseMiddleware = async (ctx, next) => {
    await next()

    const { res: { data } } = ctx
    if (successCode.includes(data.code)) {
        ctx.res = data.data
    } else {
        throw data
    }
}

/** @type {typeof import('tarojs-request').networkCheckMiddleware} */
const urlChangeMiddleware = async (ctx, next) => {
    const { req: { url } } = ctx
    // 如果传入的 URL 不是整段的 HTTP，将其拼接为正确的 HTTP 地址
    if (!/http[s]{0,1}:\/\//.test(url)) {
        const path = url.slice(0, 1) === '/' ? url : `/${url}`
        const baseUrl = baseURL.slice(-1) === '/' ? baseURL.slice(0, -1) : baseURL

        ctx.req.url = baseURL + path
    }
    await next()
}

/** @type {typeof import('tarojs-request').networkCheckMiddleware} */
const tokenCheckMiddleware = async (ctx, next) => {
    const { req: { header: requestHeader } } = ctx
    // 如果 Header 中没有传入 token 参数，则进行此处理
    if (!requestHeader.token) {
        const storageToken = token.get()
        ctx.req.header.token = storageToken
    }
    await next()
    const { res: { header: responseHeader } } = ctx
    // 如果返回的响应中包含 token，则将其应用到 storage
    if (responseHeader.token) {
        token.set(responseHeader.token)
    }
}

const request = extend({
    errorHandler,
    signal: abortController.signal
})

request.use(responseMiddleware) // 对返回值进行最终处理
request.use(urlChangeMiddleware) // 对请求 URL 进行中间件拦截处理
request.use(tokenCheckMiddleware) // 对请求体的 Token 进行拦截处理

export default request
export {
    abortController
}
