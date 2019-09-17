<template>
<!-- 
     <router-link :to="'/HOME/goodsinfo?='+item.id" tag="div" class="goods-item" v-for="item in goodslist" :key="item.id">
     </router-link>
 -->
 <!-- 
     在网页中有两种跳转方式：
     方式1：
     使用a标签的形式进行跳转 叫做标签跳转
     方式2：
     使用window.location.href的形式，叫做编程式导航
  -->
    <div class="goods-list">
        <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" >
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
               
                <p class="price">
                    <span class="now">{{item.sell_price}}</span>
                    <span class="old">{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>
          <mt-button type="danger" size="large" @click="addmoregoods">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageindex:1,
            goodslist:[]
        }
    },
    created() {
        this.getgoodslist()
    },
    methods: {
        getgoodslist(){//获取商品数据
            this.axios.get("http://www.liulongbin.top:3005/api/getgoods",{params:{
                pageindex:this.pageindex
            }}).then(data=>{
                if(data.data.status===0){
                 this.goodslist = this.goodslist.concat(data.data.message)
                }
            })
        },
        addmoregoods(){//获取更多商品数据
        this.pageindex+=1;
        this.getgoodslist();
        },
        goDetail(id){
            //使用JS的形式进行路由导航

            //注意：一定要区分this.$route 和this.$router这两个对象
            //其中：this.$route 是路由参数对象所有路由中的参数，params，query都属于它
            //其中：this.$router 是一个路由导航对象，用它可以方便的使用JS代码，实现路由的前进，后退，跳转到新的url地址
            //1.最简单的
           // this.$router.push("/HOME/goodsinfo/"+id)
           //2.传递对象
           //this.$router.push({path:"/HOME/goodsinfo/"+id})
           //3.传递命名的路由
           this.$router.push({name:'goodsinfo',params:{id}})
        }
    },
}
</script>

<style lang="scss" scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        padding: 8px;
        justify-content: space-between;
        .goods-item{
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 3px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 253px;
            img{
                width: 100%

            }
            .title{
                font-size: 14px
            }
        }
        .info{
            background-color: #eee;
            
            p{
                margin: 0;
                padding: 5px;
            }
        .price{
            .now{
                color: red;
                font-weight: bold;
                font-size: 16px;
            }
            .old{
                text-decoration: line-through;
                font-size: 12px;
                margin-left: 10px;
            }

        }
        .sell{
            display: flex;
            justify-content: space-between;
            font-size: 12px;
        }
        }
    }
</style>