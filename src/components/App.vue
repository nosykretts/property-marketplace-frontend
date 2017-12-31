<template>
  <div id="app">
    <el-container>
      <el-header >
        <top-header></top-header>
      </el-header>
      <el-main>
        <el-row :gutter="0">
          <el-col :xs="{span:24}" :sm="{span:24}" :md="{span: 24}">
            <router-view></router-view>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <p>This is Footer</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'
import { Message } from 'element-ui'
import TopHeader from '@/components/TopHeader'

export default {
  name: 'app',
  components: {
    TopHeader,
  },  
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['notify']),
  },
  methods: {
    showMessage() {
      Message({ ...this.notify })
    },
  },
  watch: {
    notify() {
      this.showMessage()
    },
  },

}
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
</style>



