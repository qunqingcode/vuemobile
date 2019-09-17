<template>
    <div class="goodsdesc">
        <h3>{{info.title}}</h3>
        <hr>
        <div class="content" v-html="info.content">
           
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id:this.$route.params.id,
            info:{}//图文数据
        }
    },
    methods: {
        getGoodsDesc(){
            this.axios.get("http://www.liulongbin.top:3005/api/goods/getdesc/"+this.id).then(
                data=>{
                    if(data.data.status===0){
                        this.info= data.data.message[0]
                    }
                   
                }
            )
        }
    },
    created() {
        this.getGoodsDesc()
    },
}
</script>

<style lang="scss" >
  .goodsdesc  h3{
        text-align: center;
        font-size: 12px;
        line-height: 30px;
        color: #226aff;
    }
    .content {
        padding: 4px;
        img{
        width: 100%;
        }
    }
</style>