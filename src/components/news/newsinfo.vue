<template>
    <div class="newsinfo-container">
       <h3 class="title">{{newsinfo.title}}</h3>
   
    <p class="subtitle">
        <span>发表时间:{{newsinfo.addtime|dateFormat}}</span>
        <span>点击:{{newsinfo.click}}</span>
    </p>
    <hr>
    <div class="content" v-html="newsinfo.content">
        
    </div>
     </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            id: this.$route.query.id,  //将URL中传递的ID值挂载到data上方便以后调用
            newsinfo:{}
        }
    },
    
        created(){//获取新闻数据详情
              axios.get('http://www.liulongbin.top:3005/api/getnew/'+this.$route.query.id).then(
          data=>{
              console.log(data)
              if(data.data.status===0){
                  this.newsinfo=data.data.message[0]
              }else{}
          }
      )
    },
   
}
</script>

<style >
  .newsinfo-container{
      padding: 0 4px;
}
  .newsinfo-container .title{
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
}
  .newsinfo-container .subtitle{
    color: blue;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
}
  .newsinfo-container .content img{
    width: 100%;
}
</style>
    
