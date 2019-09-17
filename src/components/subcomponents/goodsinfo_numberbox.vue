<template>
<!-- 问题：我们不知道什么时候能拿到max值，但是，总归有一刻会得到一个真正的max值 -->
<!-- 我们可以使用watch属性监听来监听这个父组件传递过来的max值，不管我们的watch会被触发几次，
但是，最后一次肯定是一个合法的max数值 -->
   <div class="mui-numbox" data-numbox-min="1" >
	<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
	<input ref="numbox" id="test" class="mui-input-numbox" type="number" value="1" @change="countChange">
	<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
	<!-- 分析：子组件什么时候把数据传递给父组件 -->
	<!--  -->
</template>
 
<script>
import mui from '../../lib/mui/js/mui.js'
export default {
	methods: {
		countChange(){//每当文本框的数据改变立即把最新的数据通过事件调用传递给父组件
			this.$emit("getcount",this.$refs.numbox.value)
		}
	},
    mounted(){
        //初始化数字选择框组件
		mui('.mui-numbox').numbox()
		
	},
	props:["max"],
	watch:{//属性监听
		
		"max":function(newvalue,oldvalue){
			// 使用JS API设置numbox 的最大值
			mui('.mui-numbox').numbox().setOption("max",newvalue)
		}
	}
}
</script>

<style lang="scss"scoped>
    
</style>