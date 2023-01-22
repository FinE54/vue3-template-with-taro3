import { defineStore } from 'pinia'

export const useAuth = defineStore({
    id: 'auth',
    state: () => ({
        isLogin: false, // 是否登录
    }),
    actions: {
        async login() {
            this.setIsLogin(true)
            return
        },
        setIsLogin(value) {
            this.isLogin = value
        },
    }
})