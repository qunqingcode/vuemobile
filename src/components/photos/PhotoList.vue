<template>
    <div>
        <!-- 顶部滑动条区域 -->
      <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
					<div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms; transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);">
						<a @click="getPhotoListByCateid(item.id)"	:class="['mui-control-item ',item.id==0?'mui-active':'']" v-for="item in cates" :key="item.id">
						{{item.title}}
						</a>
					</div>
				</div>
			</div>
			<!-- 图片列表区域 -->
			<ul class="photo-list">
			<router-link tag="li" :to="'/HOME/photoinfo/?id='+item.id" v-for="item in list" :key="item.id">
				<img v-lazy="item.img_url">
				<div class="info">
					<h1 class="info-title">{{item.title}}</h1>
					<div class="info-body">{{item.zhaiyao}}</div>
				</div>
			</router-link>
			</ul>
			</div>
  
</template>


<script>
//1.导入mui的JS文件
import mui from '../../lib/mui/js/mui.js'
export default{
	data() {
		return {
			cates:[],//所有分类的列表数组
			list:[]//图片列表数组
		}
	},
	methods: {
		getAllCategory(){//获取所有的图片分类
			this.axios.get('http://www.liulongbin.top:3005/api/getimgcategory').then(
				data=>{
					if(data.data.status===0){
						//手动拼接一个完整的分类列表
						data.data.message.unshift({
							title:'全部',
							id : 0
						})
						this.cates=data.data.message
					}
				}
			)
		},
		getPhotoListByCateid(cateId){//根据分类id，获取图片列表
			this.axios.get("http://www.liulongbin.top:3005/api/getimages/"+cateId).then(
			data=>{
				console.log(data)
					if(data.data.status===0){
					this.list=data.data.message
				}	
			}
			)
		}
	},
	created() {
		this.getAllCategory()
		//默认进入页面就主动请求所有图片列表的数据
		this.getPhotoListByCateid(0)
	},
mounted(){//渲染好并放到页面中后
			//如果要操作元素了最好在mouted里面，因为这里的DOM是最新的
//2.初始化滑动的控件
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
}
}
</script>


<style  scoped>
    * {
touch-action: pan-y;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
  background-color: #ccc;
}
.photo-list{
	list-style: none;
	margin: 0;
	padding: 10px;
	padding-bottom: 0; 
}
.photo-list li{
	position: relative;
	text-align: center;
	margin-bottom : 10px;
	box-shadow: 0 0 6px #999;
}
.photo-list img{
	width: 100%;
	vertical-align: middle;
}
.info {
background-color: rgba(0, 0, 0, 0.4);
color: white;
text-align: left;
position: absolute;
bottom: 0;
max-height: 84px;
}
.info-title{
	font-size: 14px;
}
.info-body{
	font-size: 13px;
}



</style>