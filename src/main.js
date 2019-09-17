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
4.引用vue-axios配合使用可以达到this.axios访问到axios对象
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
//全局引用vue-axios和axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)//这样全局引用后在组件中就可以用this.axios访问axios库的axios对象啦！
/* eslint-disable no-new */
//导入vue-preview插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 引用vuex
import Vuex from 'vuex'
// 全局注册vuex
Vue.use(Vuex)
//每次刚进入网站，肯定会调用main.js 在刚调用的时候先从本地存储中把购物车的数据读出来放到store中
var car = JSON.parse(localStorage.getItem('car') || '[]')
//实例化vuex
const store =new Vuex.Store({//注意new的时候是Vuex.Store() 别直接Vuex()了- - 
  state:{//this.$store.state.***
    car:car//将购物车中商品的数据用一个数组存储起来,在car数组中存储一些商品的对象，
    //咱们可以暂时将这个商品对象设计成 {id:商品id,count:要购买的数量,price:商品的单价,selected:true}
  },
  mutations:{//this.$store.commit('方法名',按需要传的唯一参数)
    addToCar(state,goodsinfo){
      //点击加入购物车，把商品信息保存到store中的car上
      //分析:
      //1.如果购物车中，之前就已经有这个对应的商品了，那么只需要更新数量
      //2.如果没有，则直接把商品数据 push到car中即可
      var flag =false//假设在购物车中没有找到对应的商品
      state.car.some(item=>{
        if(item.id==goodsinfo.id){
          item.count+= parseInt(goodsinfo.count) 
          flag=true
          return true;
        }
      })
      //如果最终循环完毕得到的flag还是false则把商品数据直接push到购物车中
      if(flag==false){
        state.car.push(goodsinfo)
      }
      //当更新car之后把car数组存储到本地的localStorage中
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updatagooodsinfo(state,goodsinfo){//修改购物车中商品的数量值
        //分析：
        state.car.some(item=>{
          if(item.id==goodsinfo.id){
            item.count=parseInt(goodsinfo.count)
            return true
          }
        })
        //当修改完商品的数量，把最新的数据保存到本地存储中
        localStorage.setItem('car',JSON.stringify(state.car))
    },
    delgooods(state,id){
      state.car.some((item,i)=>{
        if(item.id==id){
          state.car.splice(i,1)
          return true;
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updatagooodsselect(state,info){
        state.car.some(item=>{
          if(item.id==info.id){
            item.selected= info.selected
          }
        })
        //把最新的购物车状态保存到store中去
        localStorage.setItem('car',JSON.stringify(state.car))
    }
    
  },
  getters:{//this.$store.getters.***
     getAllCount:function(state){
       var c=0;
       state.car.forEach(item=>{
       c  += item.count;
       })
       return c;
     },
     getgoodscount(state){
       var o = {}
       state.car.forEach(item=>{
         o[item.id]=item.count
       })
       return o;
     },
     getgoodsselect(state){
       var o={};
       state.car.forEach(item=>{
         o[item.id]=item.selected
       })
       return o;
     },
     getGoodsCountAndAmount(state){
       var o={
         count:0,
         amount:0
       }
       state.car.forEach(item=>{
         if(item.selected){
           o.count+=item.count
           o.amount+=item.price*item.count
         }
         
       })
       return o;
     }
  }
})
new Vue({
  el: '#app',
  router,
  render :h =>h(App),
  store//挂载vuex实例 状态管理对象
})
