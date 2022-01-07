<template>
  <div class="blog">
     <div class="blog-header">
       <div class="wrap">
           <ul>
             <li class="li1"> <a href="#">Python</a> </li>
             <li><a href="#">Java</a> </li>
             <li> <a href="#">C/C++</a> </li>
             <li><a href="#">前端</a> </li>
             <li><a href="#">数据库</a> </li>
             <li><a href="#">计算机基础</a> </li>
             <li><a href="#">移动</a> </li>
             <li><a href="#">AI</a> </li>
             <li><a href="#">区块链</a> </li>
             <li><a href="#">物联网</a> </li>
             <li><a href="#">运维</a> </li>
             <li><a href="#">微软技术</a> </li>
             <li><a href="#">架构</a> </li>
             <li><a href="#">游戏</a> </li>
             <li><a href="#">云计算</a> </li>
             <li><a href="#">程序人生</a> </li>
             <li><i class="el-icon-arrow-down"></i> </li>
           </ul>
       </div>
     </div>
    
<!--    2 -->
     <div class="blog2">
          <div class="wrap">
              <img src="../../assets/img/blog2.jpg" width="100%" height="100%">
          </div>
     </div>

<!--   3 -->
    <div class="blog3">
      <div class="wrap">
           <div class="blog3-left">
             <div class="blog3-toutiao">
                <div><i class="el-icon-tickets"></i> 头条</div>
                <div style="width: 100%;height:188px ">
                  <img src="../../assets/img/toutiao.jpg" width="100%" height="100%">
                </div>
               <div style="margin-top: 5px">
                  <strong>2021 科技圈十大事件你知道几个？</strong>
                  <P style="color: #dbdada">CEO "排队"卸任、企业"扎堆"造车 </P>
               </div>
             </div>
             <div class="blog3-tit1">
             <div>
               <i style="float: right" class="el-icon-arrow-right"></i>
               <i style="float: right" class="el-icon-arrow-left"></i>
             </div>
               <div style="clear: both;overflow: hidden">
                 <div v-for="(item,index) in 5" :key="index">
                   <strong>软件测试的底层逻辑是什么？</strong>
                   <p style="color: #9f9d9d">"事物间的共同点，就是底层逻辑"</p>
                 </div>
               </div>
             </div>
             <div class="blog3-tit2">
               <div>
                 <i style="float: right" class="el-icon-arrow-right"></i>
                 <i style="float: right" class="el-icon-arrow-left"></i>
               </div>
               <div style="clear: both">
                 <div v-for="(item,index) in 5" :key="index">
                   <strong>软件测试的底层逻辑是什么？</strong>
                   <p style="color: #9f9d9d">"事物间的共同点，就是底层逻辑"</p>
                 </div>
               </div>
             </div>
           </div>
        <div class="blog3-right">
          <el-carousel style="width: 100%;height:100%" >
            <el-carousel-item v-for="item in href" :key="item">
              <img :src="item.url" width="100%" height="100%">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>

<!--    4 -->
   <div class="blog4">
    <div class="wrap">
         <div class="blog4-left">
           <div class="blog4-left1">
             <ul style="width: 100%;height: 30px;margin: 0;padding: 0">
               <li class="blog41">关注</li>
               <li>推荐</li>
               <li>资讯</li>
               <li>热榜</li>
               <li>专家推荐</li>
               <li class="blog42">更多<i class="el-icon-arrow-right
"></i></li>
             </ul>
           </div>

             <div class="blog4-content">
               <div class="blog4-c" v-for="(item,index) in contents.length" :key="index">
                 <span style="color: #dbdada">聂冬怡 发布博客 5天前</span>
                 <div style="margin-top: 4px;color: #0a0a0a;white-space: nowrap; overflow-x: hidden;text-overflow:ellipsis; ">{{contents[index].title}}</div>
                 <div class="blog4-flex">
                   <div class="blog4-img" v-if="contents[index].imgLink === '' ?  false : true">
                     <img :src="contents[index].imgLink" width="100%" height="100%">
                   </div>
                   <div class="blog4-c2">
                     <p style="
                 width: 100%;height: 42px;overflow: hidden;
                 color: #9f9d9d;margin-top: 0px;padding-left: 5px;
                  ">
                       {{contents[index].content}}
                     </p>
                     <div style="width: 100%;height: 40px">
                       <ul style="width: 100%;height: 30px;margin: 0;padding: 0">
                         <li style="margin-left:  0px">
                           <img src="../../assets/img/yes.png" width="16px" height="16px">
                           {{yes}} 赞
                         </li>
                         <li style=" ">
                           <img src="../../assets/img/no.png" width="16px" height="16px">
                           {{no}} 踩
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>

               </div>
             </div>

         </div>
         <div class="blog4-right"></div>
    </div>
   </div>


  </div>
</template>

<script>
export default {
name: "Blog-Home",
   data(){
  return {
     // 轮播图地址，后期可通过服务器给到
     href:[
       {url:require("../../../src/assets/img/lb1.png")},
       {url:require("../../../src/assets/img/lb2.jpeg")},
       {url:require("../../../src/assets/img/lb3.jpeg")},
       {url:require("../../../src/assets/img/lb4.jpeg")}
     ],
    yes:1,no:2,
     contents:""

  }
   },


  mounted() {
     this.$axios.post("Blog")
    .then(data =>{
      this.contents = data.data;
     })
  }
}
</script>

<style scoped>
  @import "../../../src/assets/css/Blog-Home.css";
</style>