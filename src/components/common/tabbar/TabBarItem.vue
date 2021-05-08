<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else="isActive"><slot name="item-icon-active"></slot></div>
		<div :style="activeStyle"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default({
		name:"TabBarItem",
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'red'
			} 
		},
		data(){
			return{
				// isActive:false,
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path)!==-1
				//return this.$route.path.includes(this.path)
			},
			activeStyle(){
				return this.isActive?{color:this.activeColor}:{}
			}
		},
		methods:{
			itemClick(){
				//this.$router.replace(this.path).catch(() => {});这样写可以解决连续点报错问题
				if(this.$route.path !== this.path) {
					// this.$router.push({ path: item.url })
					this.$router.replace(this.path)
				}
			}
		}
	})
</script>

<style>
	.tab-bar-item{
		flex:1;
		text-align: center;
		font-size: 14px;
	}
	.tab-bar-item img{
		width: 24px;
		height: 24px;
		margin-top: 3px;
		margin-bottom:2px;
		vertical-align: middle;
	}
	
	.item-text {
	  font-size: 12px;
	  margin-top: 3px;
	  color: #333;
	}
	/* .active{
		color:red;
	} */
</style>
