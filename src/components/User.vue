<template>
    <div class="user">

      <el-table
          id="table"
          ref="multipleTable"
          :data="API"
          border="border"
          stripe="stripe"
          highlight-current-row="highlight-current-row"
          tooltip-effect="dark"
          style="width: 100%;"
          :header-cell-style="s"
         >
        <el-table-column
            :resizable="false"
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            :resizable="false"
            prop="id"
            label="id"
            width="100"
        >
        </el-table-column>
        <el-table-column
            :resizable="false"
            prop="username"
            label="用户名"
            width="120">
        </el-table-column>
        <el-table-column
            :resizable="false"
            prop="password"
            label="密码"
            width="120">
        </el-table-column>
        <el-table-column
            :resizable="false"
            prop="email"
            label="邮箱"
            width="200"
            >
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
name: "User",
  data(){
  return {
    API:"",
    loading:"",   //加载动画效果
    s:{
      "background-color":"#1989fa!important",
      "color":"black"
    }
  }
  },
   methods:{
     load(){
     this.loading = this.$loading({
       lock: true,//lock的修改符--默认是false
       text: '正在加载中，请稍后',//显示在加载图标下方的加载文案
       spinner: 'el-icon-loading',//自定义加载图标类名
       //background: "red",//遮罩层颜色
       target: document.querySelector('#table')//覆盖的dom元素节点
     });
     },
     handleEdit(index,row){
       console.log(index)
       console.log(row)
     },
     handleDelete(){

     },


   },
   mounted() {
    this.load();
    this.$axios.post("user")
     .then((data) =>{
       this.API = data.data;
       if(this.API !== "") {
            this.loading.close();
       }

     })
   }
}
</script>

<style scoped>
.s  {
  background-color: #1989fa!important;
  color:#fff;
 }
</style>