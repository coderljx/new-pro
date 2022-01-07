<template>
  <div id="app" class="app">
   <!-- <home></home> -->
 <!--  想要实现页面正常跳转, 必须要在app.vue 页面中写上下面标签, 来表明让路由显示 -->
 <router-view></router-view>
  </div>
</template>

<script>
// import home from "../src//components/Home/Home.vue"
export default {
  name: 'App',
  components:{
    // home
  },

  mounted(){

  }


}
</script>


<style>
html,body {
  margin: 0px;
  padding: 0px;
  width: 100%;
  min-height: 100%;
}

.app {
  width: 100%;
  height: 100%;
}
</style>
