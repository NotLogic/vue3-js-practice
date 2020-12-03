// 按需引入element组件  start

import { createApp } from 'vue'
import App from './App.vue'
import {
  components,
  plugins
} from '@/config/framework'
import router from '@/router'
import store from '@/store'
import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/css/common.scss'
const option = {
  size: 'small', zIndex: 3000
}

const app = createApp(App)
app.config.globalProperties.$ELEMENT = option
components.forEach(component => {
  app.use(component, option)
})

plugins.forEach(plugin => {
  app.use(plugin)
})
app.use(router)
  .use(store)
  .mount('#app')

// 按需引入element组件  end

// 全部引入element组件  start

// import { createApp } from 'vue'
// import App from './App.vue'
// import ElementPlus from 'element-plus'
// import router from '@/router'
// import store from '@/store'
// import 'element-plus/lib/theme-chalk/index.css';
// import '@/assets/css/common.scss'

// const option = {
//   size: 'small', zIndex: 3000
// }
// const app = createApp(App)
// app.use(ElementPlus, option)
//   .use(router)
//   .use(store)
//   .mount('#app')

// 全部引入element组件 end
