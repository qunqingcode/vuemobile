import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from  '../components/tabbar/MemberContainer.vue'
import ShopcarContainer from  '../components/tabbar/ShopcarContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import NewList from '../components/news/newslist.vue'
import NewsInfo from '../components/news/newsinfo.vue'
import PhotoList from '../components/photos/PhotoList.vue'
import Photoinfo from '../components/photos/Photoinfo.vue'
import GoodsList from  '../components/goodslist/GoodsList.vue'
import GoodsInfo from '../components/goodslist/GoodInfo.vue'
import GoodsDesc from '../components/goodslist/Goodsdesc.vue'
import GoodsComment from '../components/goodslist/Goodscomment.vue'
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
    },
    {
      path:'/HOME/photolist',
      name:'photolist',
      component:PhotoList
    },
    {
      path:'/HOME/photoinfo',
      name:'photoinfo',
      component:Photoinfo
    },
    {
      path:'/HOME/goodslist',
      name:'goodslist',
      component:GoodsList
    },
    {
      path:'/HOME/goodsinfo/:id',
      name:'goodsinfo',//路由的名字，根据这个名字来跳转到这里去
      component:GoodsInfo
    },
    {
      path:'/HOME/goodsinfo/goodsdesc/:id',
      name:'goodsdesc',
      component:GoodsDesc
    },
    {
      path:'/HOME/goodsinfo/goodscomment/:id',
      name:'goodscomment',
      component:GoodsComment
    }
  ],
  linkActiveClass:'mui-active'//覆盖默认的路由高亮的类 linkActiveClass去设置路由激活时的样式类！！！还有个在CSS中设置router-link-active可以设置但是它的权重不好控制所以我们采用这种方法来调用库中的激活样式
})
