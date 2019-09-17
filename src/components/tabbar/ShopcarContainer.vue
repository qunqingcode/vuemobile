<template>
    <div class="shopcar">
        <div class="goodslist">
            <!-- 商品列表项区域 -->
      <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id" >
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<mt-switch @change="selected(item.id,$store.getters.getgoodsselect[item.id])" v-model="$store.getters.getgoodsselect[item.id]"></mt-switch>
                    <img :src="item.thumb_path" alt="">
                    <div class="info">
                        <h1>{{item.title}}</h1>
                        <p>
                            <span class="price">￥{{item.sell_price}}</span>
                            <snumbox :initcount="$store.getters.getgoodscount[item.id]" :goodsid="item.id"></snumbox>
                            <!--
                                 如何从购物车中获取商品的数量
                                 1.先创建一个空对象然后循环购物车中所有商品的数据
                                 2.把当前循环这条商品的id作为对象的属性名，count作为对象的属性值
                                    这样当把所有的商品循环一遍就会得到一个对象{id : count,id2 : count}
                             -->
                            <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                        </p>
                    </div>
					</div>
				</div>
			</div>
       </div>
     <!--结算区域 -->
     <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<div class="left">
                        <p>总计不含运费</p>
                        <p>已勾选商品<span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span>件 总价<span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>
    </div>
</template>

<script>
import snumbox from '../subcomponents/shopcar_numberbox'
export default {
    data() {
        return {
            goodslist:[]
        }
    },
    created() {
        this.getGoodslist()
    },
    methods: {
        getGoodslist(){
        //1.获取到store中所有商品的id，拼接出一个用逗号分隔的字符串
        var idarr=[];
        this.$store.state.car.forEach(item=>idarr.push(item.id))
        if(idarr.length<=0){//如果购物车中没有数据则直接返回，不需要请求接口，否则会报错
            return;
        }
        //获取购物车商品列表
        this.axios.get('http://www.liulongbin.top:3005/api/goods/getshopcarlist/'+idarr.join(",")).then(
            data=>{
                if(data.data.status===0){
                    this.goodslist=data.data.message
                }
            }
        )
        },
        remove(id,index){//点击删除，把商品从store中根据id删除，同时把当前组件中的goodslist中对应要删除的商品使用index来删除
            this.$store.commit('delgooods',id)
            this.goodslist.splice(index,1)
        },
        selected(id,value){//每当点击开关把最新的开关状态同步到store中
            this.$store.commit('updatagooodsselect',{id,selected:value})
        }
    },
    components:{
        snumbox
    }
}
</script>

<style lang="scss" scoped>
.shopcar{
    background-color: #eee;
    overflow: hidden;
}
.goodslist{
    .mui-card-content-inner{
    display:flex;
    align-items: center;
    }
    
 img{
    width: 60px;
    height: 60px;
}
h1{
    font-size: 13px;
}
.info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.info .price{
    color: red;
    font-weight: bold;
}
}
.mui-card-content-inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red{
        font-size: 16px;
        font-weight: bold;
        color: red;
    }
}
</style>
