<template>
  <el-row type="flex" justify="space-around" align="middle">
    <div>
      <el-card class="box-card" style="max-width: 350px">
        <el-input placeholder="Email" name="email" v-model="email"></el-input>
        <el-input placeholder="Password" type="password" name="password" v-model="password" style="margin-bottom:20px;"></el-input>
        <el-button @click="login" class="beauty" style="width:100%; height:50px;">Login</el-button>
      </el-card>
    </div>
  </el-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      email: null,
      password: null,
      fbSignInParams: {
        scope: 'public_profile,email',
        return_scopes: true,
      },
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      })
    },
    pushRegister() {
      this.$router.push({ name: 'registerPage' })
    },
  },
}
</script>

<style scoped>

</style>



