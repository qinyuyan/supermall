<template>
	<div class="nav-bar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'NavBar'
	}
</script>

<style>
	.nav-bar{
		display:flex;
		line-height: 44px;
		height: 44px;
		text-align: center;
		box-shadow: 0 1px 1px rgba(113, 189, 255, 0.15);
		position: fixed;
		z-index: 9;
		width: 100%;
		left: 0;
		right: 0;
		top: 0;
	}
	.left,.right{
		width: 23%;
	}
	.center{flex: 1;}
</style>
