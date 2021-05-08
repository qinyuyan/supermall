<template>
	<swiper>
		<swiper-item v-for="item in banner">
			<a :href="item.link">
				<img :src="item.image" />
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper'
	export default{
		name: 'HomeSwipers',
		components: {
			Swiper,
			SwiperItem
		},
		props:{
			banner:{
				type: Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
</style>
