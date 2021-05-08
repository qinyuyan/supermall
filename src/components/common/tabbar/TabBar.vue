<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'TabBar'
	}
</script>

<style scoped="">
#tab-bar{
		display:flex;
		height: 49px;
		background-color: aliceblue;
		position:fixed;
		bottom:0;
		left:0;
		right:0;
		box-shadow: 0 -1px 1px rgba(113, 189, 255, 0.15);
	}
</style>
