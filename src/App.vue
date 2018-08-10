<template>
  <div class="lyy">
    <header>
      <header-bar></header-bar>
    </header>
    <div class="main">
      <div class="sidebar">
        <side-bar ref="sidebar"></side-bar>
      </div>
      <div class="show">
        <router-view></router-view>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import headerBar from './components/header.vue';
import sideBar from './components/sideBar.vue';
import $ from 'jquery'

export default{
  data() {
    return {
      
    }
  },
  methods: {
    setheight:function(){
      var height = $(document).height() - 88;
      $('.sidebar').height(height);
      $('.show').height(height);
    }
  },
  components: {
    sideBar,
    headerBar
  },
  mounted(){
    this.$router.push('/')
    this.setheight()
  }
}
</script>

<style>
  .lyy{
    width:100%;
  }
  header{
    width:80%;
    height:66px;
    postion:fixed;
    margin-left:10%;
  }
  .main{
    width:80%;
    postion:fixed;
    margin-left:10%;
  }
  .sidebar{
    width:15.6%;
    float:left;
    color:white;
  }
  .show{
    width:84%;
    float:left;
    background-color:#f2f2f2;
  }
</style>
