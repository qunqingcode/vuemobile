<template>
    <div>
        <mt-swipe :auto="4000">
    <!-- v-for 复习 v-for="item in data"做到数据遍历渲染 -->
    <!-- 在组件中使用v-for循环的话一定要使用key -->
    <!-- 谁使用该组件谁为我们传递lunbotuList -->
    <!-- 此时，lunbotuList应该是父组件向子组件传值来设置 -->
  <mt-swipe-item v-for="(item,index) in lunbotuList" :key="index"
  >
  <img :src="item.img" :class="{full:isfull}" >
  </mt-swipe-item>
  
</mt-swipe>
 
    </div>
    <!-- 分析商品详情中的轮播图为何这么难看 -->
    <!-- 1.首页中图片宽高都使用了100% -->
    <!-- 2.在商品详情页面中，轮播图图片如果也使用宽高100%，页面不好看 -->
    <!-- 3.商品详情页中的轮播图，希望高度为100%，但是宽度为自适应 -->
    <!-- 4.经过分析得到问题原因： 首页中的轮播图和商品详情中的轮播图分歧点是宽度到底是100%还是自适应 -->
    <!-- 5.既然这两个轮播图其他方面都是没有冲突的，只是宽度有分歧，那么我们可以定义一个属性，让使用轮播图的调用者，手动指定是否为100%的宽度 -->
</template>

<script>
export default {
    props:["lunbotuList","isfull"]
}
</script>
<style lang="scss" scoped>
    .mint-swipe{
    height: 30vh;
    
}
.mint-swipe-item {
    text-align: center;
}
.mint-swipe-item img{
    
     
      height: 100%;
       
    }
    .full{
        width:100%;
    }
</style>