<template>
	<div class="clearfix header-wrapper">
		<div class="left">
			<img class="logo" src="../assets/22.png"></img>
		</div>
		<div class="right">
			<span><i class="el-icon-search"></i></span>
			<span><i class="el-icon-bell"></i></span>
			<img class="photo"></img>
			<span>momo.zxy</span>	
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			
		},
		methods: {
			
		}
	}
</script>
<style>
	.left{
		width:15.55%;
		background-color:#0B2161;
		height:66px;
		float:left;
	}
	.logo{
		margin-top:13px;
		margin-left:12%;
		width:auto;
		 height:auto;
		 max-width:100%;
		 max-height:100%;
	}
	.right{
		width:84%;
		float:left;
		height:66px;
		display:flex;
		flex-direction:row;
		justify-content:flex-end;
		align-items:center;
	}
	.right span{
		margin: 0 15px 0 15px;
	}
	.photo{
		height:30px;
		width:30px;
		border:0.1px solid grey;
		border-radius:50%;
	}
</style>