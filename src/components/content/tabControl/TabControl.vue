<template>
	<div class="tab-control">
		<div class="tab-control-item" v-for="(item,index) in titles" :class="{active:index===currentIndex}" @click="itemClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'TabControl',
		props:{
			titles: {
				typr:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				currentIndex:0,
			}
		},
		methods:{
			itemClick(index){
				this.currentIndex=index;
				this.$emit('tabClick',index)
			}
		}
	}
</script>

<style>
	.tab-control{
		display: flex;
		text-align: center;
		font-size: 16px;
		height: 40px;
		line-height: 40px;
		background-color: #fff;
		z-index: 9;
	}
	.tab-control-item{
		flex:1
	}
	.tab-control-item span{
		padding:5px;
	}
	.active{
		color: var(--color-high-text);
	}
	.active span{border-bottom: 3px solid var(--color-high-text);}
</style>
