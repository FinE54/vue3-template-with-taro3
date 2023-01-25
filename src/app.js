// 引入系统级别相关控件
import { createApp } from 'vue'
import { getSystemInfoSync, getEnv } from '@tarojs/taro'
import 'default-passive-events'

// 引入状态管理
import store from '@src/store'
// 引入路由相关控件
import "@src/router"
// 引入组件样式
import 'windi.css';
import '@src/app.scss'

const App = createApp({
  onLaunch(options) {
    // 程序入口 onLaunch 时调用
  },
  onShow(options) {
    // 程序显示 / 隐藏时调用
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(store)

export default App
