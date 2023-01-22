// 引入系统级别相关控件
import { createApp } from 'vue'
import 'default-passive-events'

// 引入路由相关控件
import "@src/router"
// 引入组件样式
import 'windi.css';
import '@src/app.scss'

const App = createApp({
  onShow(options) { },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export default App
