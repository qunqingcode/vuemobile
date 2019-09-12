import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from  '../components/tabbar/MemberContainer.vue'
import ShopcarContainer from  '../components/tabbar/ShopcarContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import NewList from '../components/news/newslist.vue'
import NewsInfo from '../components/news/newsinfo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect: '/Home'},//通过重定向设置一开始绑定的组件
    {
      path: '/Home',
      name: 'Home',
      component: HomeContainer
    },
    {
      path: '/Member',
      name: 'Member',
      component: MemberContainer
    },
    {
      path: '/Shopcar',
      name: 'Shopcar',
      component: ShopcarContainer
    },
    {
      path: '/Search',
      name: 'Search',
      component: SearchContainer
    },
    {
      path:'/HOME/newslist',
      name:'newslist',
      component:NewList
    },
    {
    path: '/HOME/newslist/newsinfo',
    name:'newsinfo',
    component:NewsInfo
    }
  ],
  linkActiveClass:'mui-active'//覆盖默认的路由高亮的类 linkActiveClass去设置路由激活时的样式类！！！还有个在CSS中设置router-link-active可以设置但是它的权重不好控制所以我们采用这种方法来调用库中的激活样式
})
