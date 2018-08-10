<template>
	<div class="side-bar">
		<el-row class="tac">
		    <el-menu
		      default-active="2"
		      class="el-menu-vertical-demo"
		      @open="handleOpen"
		      @close="handleClose"
		      background-color="#545c64"
		      text-color="#fff"
		      active-text-color="#ffd04b">
		      <el-menu-item index="1">
		        <i class="el-icon-menu"></i>
		        <span slot="title"><router-link to="/">用户管理</router-link></span>
		      </el-menu-item>
		      <el-menu-item index="2">
		        <i class="el-icon-edit-outline"></i>
		        <span slot="title"><router-link to="/login">轮播图管理</router-link></span>
		      </el-menu-item>
		      <el-menu-item index="3">
		        <i class="el-icon-date"></i>
		        <span slot="title"><router-link to="/lyy">分栏类管理</router-link></span>
		      </el-menu-item>
		      <el-menu-item index="4">
		        <i class="el-icon-tickets"></i>
		        <span slot="title"><router-link to="/ll">产品管理</router-link></span>
		      </el-menu-item>
		      <el-menu-item index="5">
		        <i class="el-icon-circle-check"></i>
		        <span slot="title"><router-link to="/ymm">预约信息管理</router-link></span>
		      </el-menu-item>
		      <el-menu-item index="6">
		        <i class="el-icon-warning"></i>
		        <span slot="title"><router-link to="/ff">修改密码</router-link></span>
		      </el-menu-item>
		    </el-menu>
		</el-row>
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
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    }
	}
</script>
<style>
</style>