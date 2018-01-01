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
        <p>This is Footer6</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions, mapMutations, mapState } = createNamespacedHelpers ('notify')
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
      Message({ ...this.notify})
    },
  },
  watch: {
    notify: {
      deep: true,
      handler : function() {
        this.showMessage()
      }
    }
  },

}
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  background: #f1f1f1;
  font-family: 'Open Sans', sans-serif;
}
</style>



