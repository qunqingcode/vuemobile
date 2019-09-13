<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容(最多120字)" maxlength="120"></textarea>
        <mt-button  type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in comments" :key="index">
                <div class="cmt-title">
                    第{{index+1}}楼 &nbsp;&nbsp; 用户:{{item.user_name}} &nbsp;&nbsp;发表时间{{item.add_time|dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
                
                
            </div>
        </div>
        <span>当前是第{{pageIndex}}页</span>
        <mt-button  type="danger" size="large" plain @click="addmore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import axios from 'axios'
export default {
    data() {
        return {
            pageIndex:1,//默认展示第一页数据
            comments:[]
        }
    },
    methods: {
        getcomments(){
            axios.get('http://www.liulongbin.top:3005/api/getcomments/'+this.id,{params:{pageindex:this.pageIndex}}
        ).then(data=>{
            
          if(data.data.status===0){
             
            this.comments=  this.comments=data.data.message;
          }else{
              Toast('获取失败')
          }
            })
        },
        addmore(){
            this.pageIndex+=1;
             this.getcomments()
        }
    },
    props:["id"],//父子组件传值
    created() {
        this.getcomments()
    },
}
</script>

<style  scoped>
.cmt-container h3{
    font-size: 16px;
}
.cmt-container textarea{
    font-size: 14px;
    height: 85px;
    margin: 0;
}
.cmt-list,.cmt-list,.cmt-body {
margin: 10px 0;
}
.cmt-list .cmt-title{
    background-color: #ccc;
    line-height: 30px
}
.cmt-body{
    line-height: 35px;
    text-indent: 2em;
}
</style>