<template>
	<div class="recommend">
		<div v-for="item in recommends">
			<a :href="item.link">
				<img :src="item.image" />
				<div>{{item.title}}</div>
			</a> 
		</div>
	</div>
</template>

<script>
	export default{
		name:'RecommendView',
		props:{
			recommends:{
				type: Array,
				default(){
					console.log(recommends)
					return []
				}
			}
		}
	}
</script>

<style>
	.recommend{
		display: flex;
		text-align: center;
		font-size: 14px;
		margin-top: 10px;
		padding-bottom: 30px;
		border-bottom: 10px solid #eee;
		
	}
	.recommend img {
	  width: 90%;
	  margin-bottom: 5px;
	}
</style>
