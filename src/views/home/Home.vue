<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="center">购物车</div>
		</nav-bar>
		<home-swiper :banner="banner"/>
		<recommend-view :recommends="recommend"/>
		<feature-view />
		<tab-control class="tab-control" 
					:titles="['流行','新款','精选']" 
					@tabClick="tabClick"></tab-control>
		<goods-list :goods="showGoods"></goods-list>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	import HomeSwiper from "./childComps/HomeSwipers.vue"
	import RecommendView from "./childComps/RecommendView.vue"
	import FeatureView from "./childComps/FeatureView.vue"
	
	import TabControl from "components/content/tabControl/TabControl.vue"
	import GoodsList from "components/content/goods/GoodsList.vue"
	
	import {getHomeMultidata,HomeGoods} from 'network/home'
	
	
	export default{
		name: 'Home',
		components: {
			NavBar,
			HomeSwiper,
			RecommendView,
			FeatureView,
			
			TabControl,
			GoodsList,
		},
		data(){
			return{
				banner:[],
				recommend:[],
				goods:{
					'pop':{'page':0,list:[]},
					'new':{'page':0,list:[]},
					'sell':{'page':0,list:[]},
				},
				currentType:'pop',
			}
		},
		created(){
			//1、请求多个数据
			this.getHomeMultidata()
			//2、请求商品数据
			this.HomeGoods('pop');
			this.HomeGoods('new')
			this.HomeGoods('sell')
		},
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
		methods:{
			/**
			 * 事件监听相关方法
			 * */
			tabClick(index){
				switch(index){
					case 0:
						this.currentType='pop'
						break
					case 1:
						this.currentType='new'
						break
					case 2:
						this.currentType='sell'
						break;
				}
			},
			
			/**
			 * 网络请求相关代码
			 * */
			getHomeMultidata(){
				getHomeMultidata().then(res=>{
					this.banner = res.data.banner.list;
					this.recommend = res.data.recommend.list;
				})
			},
			HomeGoods(type){
				//[]里面可以传变量、参数、表达式，而.后面只能跟一个固定的属性
				const page=this.goods[type].page+1
				HomeGoods(type,page).then(res=>{
					console.log(res.data);
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page +=1;
				})
			},
		}
	}
</script>

<style>
	.home-nav{
		background-color: var(--color-tint);
		color: #FFFFFF;
	}
	#home{
		padding-top: 44px;
	}
	.tab-control{
		position:sticky;
		top:44px
	}
</style>
