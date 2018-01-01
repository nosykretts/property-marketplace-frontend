<template>
  <el-tabs type="border-card" @tab-click="tabClicked" v-model="activeName" tab-position="top">
    <el-tab-pane label="Account" name="myHome"></el-tab-pane>
    <el-tab-pane label="Houses" name="myHouses"></el-tab-pane>
    <router-view></router-view>
  </el-tabs>
</template>

<script>
export default {
  name : 'Dashboard',
  mounted(){
    this.activeName = this.$router.currentRoute.name
  },
  data(){
    return {
      activeName : 'myHome'
    }
  },
  methods : {
    tabClicked(tab){
      this.$router.push({
        name : tab.name
      })
    }
  }
}
</script>

<style>
.el-tabs--left .el-tabs__item{
  text-align: left !important;
}
.el-tabs--left .el-tabs__nav, .el-tabs--right .el-tabs__nav{
  min-height: 200px;
}
.el-tabs--left.el-tabs--border-card .el-tabs__item{
  margin-top: 0;
}
</style>
