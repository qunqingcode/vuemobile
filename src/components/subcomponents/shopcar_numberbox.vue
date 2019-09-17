<template>
   <div class="mui-numbox" data-numbox-min="1" style="height=25px">
	<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
	<input ref="numbox" id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChange" readonly>
	<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
	
</template>
 
<script>
import mui from '../../lib/mui/js/mui.js'
export default {
	methods: {
		countChange(){//数量改变了
		//每当数量值改变立即把最新的数量同步到购物车的store中覆盖之前的数量值
		this.$store.commit('updatagooodsinfo',{
			id:this.goodsid,
			count:this.$refs.numbox.value
		})
        }
        
	},
    mounted(){
        //初始化数字选择框组件
		mui('.mui-numbox').numbox()
		
    },
  props:["initcount","goodsid"]

}
</script>

<style lang="scss"scoped>
    
</style>