import Vue from 'vue'
// 导入根组件
import App from './App'

import router from './router'
import mintUI from 'mint-ui'
// 注意引入ui库的时候有的库得单独引入它的CSS文件哦
import '../node_modules/mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';

// 导入axios 去组件中导入- -axios全局安装懒得做了

/*
雷点：axios Axios 是一个基于 promise 的 HTTP 库
axios并没有install 方法，所以是不能使用vue.use()方法的。 
那么难道每个文件都要来引用一次？解决方法有很多种： 
1.结合 vue-axios使用 
2. axios 改写为 Vue 的原型属性 
 Vue.prototype.$ajax= axios 
        再组件中用this.$ajax就相当于axios这个对象了然后对比着axios官网用就行
3.结合 Vuex的action
*/

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//全局引用mintUI组件
Vue.use(mintUI)

import './lib/mui-master/dist/css/mui.min.css'
import './lib/mui-master/examples/hello-mui/css/icons-extra.css'
import './lib/mui-master/examples/hello-mui/fonts/mui-icons-extra.ttf'
import moment from 'moment'
Vue.config.productionTip = false
//定义全局过滤器
Vue.filter('dateFormat',function(datestr,pattern="YYYY-MM-DD HH:MM:SS"){
  return  moment(datestr).format(pattern)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render :h =>h(App)
})
