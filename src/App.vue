<template>
<div class="appContainer" >
  <!-- 顶部header区域 -->
    <mt-header fixed title="群青Vue项目"  ></mt-header>
    <!-- 中间的路由router-view区域 -->
	<transition >
    <router-view class="test"></router-view>
		</transition>
    <!-- 底部Tabbar区域 -->
   <nav class="mui-bar mui-bar-tab ">
	   		
			<router-link  to="/Home" class="mui-tab-item " >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			
			
			<router-link to="/Member" class="mui-tab-item" >
				<span class="mui-icon  mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			
			
			<router-link to="/Shopcar" class="mui-tab-item" >
				<span class=" mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
				
			<router-link to="/Search" class="mui-tab-item" >
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
				
		</nav>
		
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.appContainer{
	padding-top: 40px;
	overflow-x: hidden;
	padding-bottom: 50px;
}

.v-enter-active{
	/*transition的第一个参数必须是指定过渡的目标*/
transition: all,ease,0.45s;
}
.v-leave-active{
	transition: all,ease,0.46s;
}
.v-enter{
	transform: translate(100vw,0);
	opacity: 0;
}

.v-leave-to{
	transform: translate(-100vw,0);
	opacity: 0;
	position: absolute;
	/* 走的时候让它脱离文档流这样的话就可以不占位置，就不会出现等前一个走了才移上去的画面了 */
}


</style>
