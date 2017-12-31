<template>
  <el-menu mode="horizontal" router>
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/signin">Sign In</el-menu-item>
    <el-menu-item index="/signup">Sign Up</el-menu-item>
    
    <el-menu-item index="3">
      <a href="https://www.ele.me" target="_blank">Orders</a>
    </el-menu-item>
  </el-menu>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'TopHeader',
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
</script>

<style>

</style>
