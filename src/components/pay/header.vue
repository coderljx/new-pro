<template>
   <div class="pay">
<!--     1-->
      <div class="wrap animate__animated animate__bounceIn">
        <div style="width: 200px;height: 100px;box-shadow: 0 0 2px 3px #e9e7e7;"><img src="../../assets/img/back1.jpeg" style="width: 100%;height: 99%" ></div>
        <div style="width: 500px" class="header1">
         <div style="width: 100%" >
           <el-input style="width: 85%"></el-input>
           <el-button style="height: 40px"><i class="el-icon-zoom-in"></i> </el-button>
         </div>
          <ul>
            <li style="font-size: 18px;color: red">满199减100</li>
            <li>元旦大促</li>
            <li>美妆新选</li>
            <li>3c特惠</li>
            <li>服饰清仓</li>
            <li>爆品满减</li>
          </ul>
        </div>
        <div style="flex: 1">*</div>
      </div>
<!--     2-->
      <div class="pay2">
        <div class="wrap">
          <div style="width: 200px;height: 100%" class="animate__animated animate__bounceInRight">
             <ul style="display: flex;flex-direction: column">
               <li>家用电器</li>
               <li>手机/运营商/数码</li>
               <li>电脑/办公</li>
               <li>家居/家具/家装/厨具</li>
               <li>男装/女装/童装/内衣</li>
               <li>美妆/个护清洁/宠物</li>
               <li>女鞋/箱包/钟表/珠宝</li>
               <li>男鞋/运动/户外</li>
               <li>房产/汽车/汽车用品</li>
               <li>母婴/玩具乐器</li>
               <li>食品/酒类/生鲜/特产</li>
               <li>艺术/礼品鲜花/农资绿植</li>
               <li>医药保健/计生情趣</li>
               <li>图书/文娱/教育/电子书</li>
               <li>机票/酒店/旅游/生活</li>
               <li>理财/众筹/白条/保险</li>
               <li>安装/维修/清洗/二手</li>
             </ul>
          </div>
          <div style="flex: 1;margin-top: 10px">
            <img src="../../assets/img/back2.jpeg" style="width: 100%;height: 100%">
          </div>
        </div>
      </div>

<!--     3  -->
      <div class="pay3">
         <div class="wrap">
           <img src="../../assets/img/miaosha.png" height="100%">
           <div style="flex: 1">
               <div class="pay3-slider">
                 <div class="pay3-slider-div" v-for="(item,index) in 3" :key="index" @loadstart="l()">
                   <img src="../../assets/img/miaosha.png" height="90%" width="80%">
                   <p> </p>
                 </div>
               </div>
           </div>
           <div style="width: 180px">
                 <img  src="../../assets/img/miaosha.png" width="180px" height="100%">
           </div>
         </div>
      </div>


<!--  4-->
      <div class="pay4">
         <div class="wrap">
            <div class="pay4-left">
              <div class="pay4-left-top">
                <p style="display: inline-block;">每日特价</p>
                <ul>
                  <li>精选</li>
                  <li>美食</li>
                  <li>百货</li>
                  <li>个护</li>
                  <li>预告</li>
                </ul>
              </div>
              <div class="pay4-left-bootm">
                <div style="
                 float: left;
                 width: 200px;
                 height: 100%; background-color: rgb(248,248,249) ">
                      <div style="width: 80%;margin: 30px auto auto auto">
                         <img src="../../assets/img/back3.jpeg" width="100%" height="200px" style="">
                      </div>
                     <p style="color: red;text-align: center">¥<i>9.9</i></p>
                 </div>
                 <div style="
                 float: right;
                 width: 280px;
                 height: 100%;
                 display: flex;
                 flex-wrap: wrap;">
                    <div style="width: 140px;height: 145px" v-for="(item,index) in 4" :key="index">
                         <div style="width: 100%;height: 100%;margin-top: 30px">
                            <img src="../../assets/img/back2.jpeg" width="50%"  height="50%">
                            <div>
                              <span>平口垃圾袋</span>
                              <pre style="color: red;margin: 0px">¥ <i>5.8</i></pre>
                            </div>
                         </div>
                    </div>

                   </div>
              </div>
            </div>

            <div class="pay4-right" style="margin-left: 10px;">
              <div class="pay4-left-top">
                <p style="display: inline-block;">品牌闪购</p>
              </div>
              <div class="pay4-left-bootm">
                <div style="
                 float: left;
                 width: 200px;
                 height: 100%; background-color: rgb(248,248,249) ">
                  <div style="width: 80%;margin: 30px auto auto auto">
                    <img src="../../assets/img/back3.jpeg" width="100%" height="200px" style="">
                  </div>
                  <p style="color: red;text-align: center">¥<i>9.9</i></p>
                </div>
                <div style="
                 float: right;
                 width: 280px;
                 height: 100%;
                 display: flex;
                 flex-wrap: wrap;
 ">
                  <div style="width: 140px;height: 145px" v-for="(item,index) in 4" :key="index">
                    <div style="width: 100%;height: 100%;margin-top: 30px">
                      <img src="../../assets/img/back2.jpeg" width="50%"  height="50%">
                      <div>
                        <span>平口垃圾袋</span>
                        <pre style="color: red;margin: 0px">¥ <i>5.8</i></pre>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
         </div>
      </div>

<!--     5-->
      <div class="pay5">
         <div class="wrap">
           <div style="width: 190px;">
             <img src="../../assets/img/13571641288058_.pic.jpg" width="100%" height="100%">
           </div>
           <div class="pay5-long animate__animated animate__zoomIn"></div>
         </div>
      </div>

<!--     6 -->
       <div class="pay6">
          <div class="wrap">
            <p style="text-align: center">频道广场</p>

          </div>


       </div>

   </div>
</template>

<script>
import 'animate.css';

export default {
name: "header",
   methods :{
      l(){
        console.log(123)
      }
   }
}

</script>

<style scoped>
  @import "../../../src/assets/css/pay.css";
</style>