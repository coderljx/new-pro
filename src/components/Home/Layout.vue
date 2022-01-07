<template>
   <div class="show">
     <div class="wraps">
       <div class="lay-left" id="lay-left">
<!--         <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
<!--         <el-radio-button :label="false">展开</el-radio-button>-->
<!--         <el-radio-button :label="true">收起</el-radio-button>-->
<!--       </el-radio-group>-->
         <el-menu
             default-active="1-4-1"
             class="el-menu-vertical-demo"
             :collapse="false"
             @select="sele"
             style="height: 100%;"
         >
           <el-submenu index="1">
             <template slot="title">
               <i class="el-icon-location"></i>
               <span slot="title">SL</span>
             </template>
             <el-menu-item-group>
               <el-menu-item index="1-1">商城</el-menu-item>
             </el-menu-item-group>
           </el-submenu>
<!--  2 -->
           <el-submenu index="2">
             <template slot="title">
               <i class="el-icon-user"></i>
               <span slot="title">用户</span>
             </template>
             <el-menu-item-group>
               <el-menu-item index="2-1">用户信息</el-menu-item>
             </el-menu-item-group>
           </el-submenu>
<!--  3 -->
           <el-submenu index="3">
             <template slot="title">
               <i class="el-icon-user"></i>
               <span slot="title">博客</span>
             </template>
             <el-menu-item-group>
               <el-menu-item index="3-1"> 首页</el-menu-item>
             </el-menu-item-group>
           </el-submenu>
         </el-menu>
       </div>
       <div class="lay-right">
       <!--  头部        -->
          <div class="lay-header" style="background-color: aliceblue">
          </div>
<!--       身体  -->
         <div class="lay-body">
<!--          保证在切换页面后，能够保存状态 -->
           <keep-alive>
             <component :is = "coco"></component>
           </keep-alive>
         </div>
       </div>
     </div>

   </div>
</template>

<script>
 import pay from "../../components/pay/header"
 import user from "../../components/User"
 import BlogHome from "../../components/Blog/Blog-Home"
export default {
name: "Layout",
   data(){
     return {
       coco:"BlogHome",
       isCollapse:"false"
     }
    },
  components:{
     pay,user,BlogHome
  },
   methods:{
   sele(index){
     console.log(index);
   }

   },

  watch:{
    isCollapse:{
      handler(n,o){
        let left = document.getElementById("lay-left");
        if(n === "false" ) {
          console.log(n)
          // left.style.width = 100 + "px";
        }else if (o === "true") {
          console.log(o)
          left.style.width = 200 + "px";
        }
      }


    }

  }

}
</script>

<style scoped>
  @import url("../../../src/assets/css/Layout.css");

</style>