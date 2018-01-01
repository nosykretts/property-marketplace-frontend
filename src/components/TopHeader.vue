<template>
  <el-menu mode="horizontal" router>
    <el-menu-item index="/">Home</el-menu-item>
    <template v-if="!isLoggedIn">
        <el-menu-item index="/signin">Sign In</el-menu-item>
        <el-menu-item index="/signup">Sign Up</el-menu-item>
    </template>  
    <template v-if="isLoggedIn">
      <el-menu-item index="/signout">Sign Out</el-menu-item>
    </template>      
  </el-menu>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers ('auth')
export default {
  name: 'TopHeader',
  data() {
    return {}
  },
  methods: {},
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
}
</script>

<style>

</style>
