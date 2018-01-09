<template>
  <div style="margin-top: 15px; margin-bottom: 25px; zoom:1.5">
    <el-input clearable placeholder="Search your dream house by address or title" v-model.lazy="inputSearch" @input="searchChanged" prefix-icon="el-icon-search">
    </el-input>
  </div>
</template>

<script>
import debounce from 'debounce'

export default {
  name: 'BigSearch',
  mounted() {
    this.inputSearch = this.$route.query.search || ''
  },
  data() {
    return {
      inputSearch: '',
      selectme: '1',
    }
  },
  methods: {
    searchChanged: debounce(() => {
      if (this.inputSearch.trim() === '') {
        this.$router.push('/')
        this.$store.dispatch('house/getHouses', {
          search: null,
        })
      } else {
        this.$router.push({ name: 'home', query: { search: this.inputSearch } })
        this.$store.dispatch('house/getHouses', {
          search: this.inputSearch,
        })
      }
      console.log(this.inputSearch)
    }, 600),
  },
}
</script>

<style scoped>
  .el-select .el-input {
    width: 120px;
  }
</style>
