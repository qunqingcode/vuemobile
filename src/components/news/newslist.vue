<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in newslist" :key="index">
					<router-link :to="'/HOME/newslist/newsinfo/?id='+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class="mui-ellipsis">
                               
                                <span>发表时间:{{item.add_time | dateFormat}}</span>
                                <span>点击：{{item.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            newslist:[]
        }
    },
    created(){
        axios.get("http://www.liulongbin.top:3005/api/getnewslist").then(data=>{
            console.log(data)
            this.newslist=data.data.message;
        })
    }
}
</script>

<style scoped>
    .mui-table-view li h1{
        font-size: 12px   
    }
    .mui-ellipsis{
        
        color: blue;
        display: flex;
        justify-content: space-between;
    }

</style>