<template>
<div class="appContainer" >
  <!-- 顶部header区域 -->
  
    <mt-header fixed title="群青Vue项目"   >
		<!-- mt-header里的元素设置slot可以设置这个元素显示在左边还是右边(left、right) -->
		 <mt-button v-show="flag" icon="back" slot="left" @click="routerback">返回</mt-button>
	</mt-header>
    <!-- 中间的路由router-view区域 -->
	<transition >
    <router-view class="test"></router-view>
		</transition>
    <!-- 底部Tabbar区域 -->
   <nav class="mui-bar mui-bar-tab ">
	   		
			<router-link  to="/Home" class="mui-tab-item-1" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			
			
			<router-link to="/Member" class="mui-tab-item-1" >
				<span class="mui-icon  mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			
			
			<router-link to="/Shopcar" class="mui-tab-item-1" >
				<span class=" mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
				
			<router-link to="/Search" class="mui-tab-item-1" >
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
				
		</nav>
		
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
	  return {
		  flag:false
	  }
  },
  created() {
	this.flag= this.$route.path=='/Home'?false:true
  },
  methods: {
	  routerback(){
		  this.$router.back()
	  }
  },
  watch:{
	  '$route.path':function(newval){
		  if(newval=='/Home'){
			  this.flag=false;
		  }else{
			  this.flag=true;
		  }
	  }
  }
}
</script>

<style scoped>
.mint-header span{
	z-index: 99;
}
.mint-header{
	z-index: 99;
}
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
/* 改类名解决tabbar 点击无法切换的问题*/
.mui-bar-tab .mui-tab-item-1.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
