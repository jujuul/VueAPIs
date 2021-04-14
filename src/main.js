import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import toastRegistry from './components/toast'

Vue.use(toastRegistry)
// 其中'./components/loading/index' 的 /index 可以不写，webpack会自动找到并加载 index 。如果是其他的名字就需要写上。
import Loading from '@/components/Loading'
// 这时需要 use(Loading)，如果不写 Vue.use()的话，浏览器会报错，大家可以试一下
Vue.use(Loading)

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')