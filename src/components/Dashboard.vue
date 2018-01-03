<template>
  <el-tabs type="border-card" @tab-click="tabClicked" v-model="activeName" tab-position="top">
    <el-tab-pane label="My Account" name="myHome"></el-tab-pane>
    <el-tab-pane label="My Houses" name="myHouseList"></el-tab-pane>
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

</style>
