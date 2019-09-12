<template>
    <div>
  <mt-swipe :auto="4000">
    <!-- v-for 复习 v-for="item in data"做到数据遍历渲染 -->
    <!-- 在组件中使用v-for循环的话一定要使用key -->
  <mt-swipe-item v-for="(item,index) in lunbolist" :key="index"
  >
  <img :src="item.img" >
  </mt-swipe-item>
  
</mt-swipe>
  <!-- 九宫格-六宫格改造 -->
  <ul class="mui-table-view mui-grid-view mui-grid-9">
                
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/HOME/newslist">
		                    <img src="@/assets/1.jpg" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="@/assets/i2.jpeg" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <img src="@/assets/i3.jpeg" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="@/assets/i4.jpeg" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="@/assets/i5.jpeg" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="@/assets/i6.jpg" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		           
		        </ul> 
    </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'mint-ui'
export default {
      data() {
        return {
          lunbolist:[] //保存轮播图的数组
        }
      },
    created(){
        axios.get('http://www.liulongbin.top:3005/api/getlunbo'
     ).then((data)=>
    {
     
      if(data.data.status===0){
        this.lunbolist=data.data.message;
         }else{
          Toast('加载轮播图失败')
        }
    })
    }
}

</script>

<style scoped>

.mint-swipe{
    height: 30vh;
    
}
.mint-swipe-item img{
    
      width: 100%;
      height: 100%;
       
    }
 .mui-grid-view.mui-grid-9{
   background-color: white;
   border:none;
 }
 .mui-grid-view.mui-grid-9 .mui-table-view-cell{
   border: none;
   
 }
 .mui-media-body{
   font-size: 13px;
 }
 .mui-table-view-cell img{
   box-shadow: 0 0 5px 2px gray;
  width: 100%;
   height: 100%;
 }
</style>
