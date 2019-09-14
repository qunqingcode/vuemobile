<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{photoinfo.add_time|dateFormat}}</span>
            <span>点击:{{photoinfo.click}}次</span>
        </p>
        <hr>
        <!-- 缩略图区域 -->
            <div class="thumbs">
            <vue-preview :slides="list" ></vue-preview>
            </div>
         
        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>
        <!-- 评论子组件区域 -->
    <comment-box :id="id"></comment-box>
    </div>
</template>

<script>
//导入评论子组件
import comment from '../subcomponents/comment.vue'
export default {
    data() {
        return {
           id: this.$route.query.id,//从路由中获取到的图片id
           photoinfo:[],//图片详情
            list:[]//缩略图

        }
    },
    methods: {
        getPhotoInfo(){//获取图片的详情
            this.axios.get("http://www.liulongbin.top:3005/api/getimageInfo/"+this.id).then(
                data=>{
                    if(data.data.status===0){
                        this.photoinfo=data.data.message[0]
                    }
                }
            )
        },
        getThumbs(){//获取缩略图
            this.axios.get("http://www.liulongbin.top:3005/api/getthumimages/"+this.id).then(
                data=>{
                    
                    if(data.data.status===0){
                        //循环每个图片数据对象，补全宽和高
                        data.data.message.forEach(item=>{
                            item.msrc=item.src
                            item.w=600;
                            item.h=400;
                        })
                        //把完整的数据保存到list中
                        this.list=data.data.message
                    }
                }
            )
        }
    },
    created() {
       this.getPhotoInfo()
       this.getThumbs()
    },
    components:{//注册评论子组件
        'comment-box':comment
    }
    }
</script>

<style lang="scss" scoped>
    .photoinfo-container{
        padding: 3px;
        
    }
    h3{
        color: #26A2FF;
        font-size: 15px;
        text-align: center;
        margin:15px 0;
    }
    .subtitle{
        display: flex;
        justify-content:space-between;
        font-size: 13px
    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }
    // 为thumbs设置样式 ---这里是缩略图的样式 插件的w和h是大图的宽高
    //注意这是preview新版本设置缩略图样式的方法固定写法哦因为它封装起来了
    .thumbs {
  /deep/ .my-gallery {
    display: flex;
    flex-wrap: wrap;
    figure {
      width: 30%;
      margin: 5px;
      img {
        width: 100%;
      }
    }
  }
}

  


</style>