<template>
  <div>
    <el-row :gutter="20" type="flex" justify="space-between" class="houses-container">
      <el-col :xs="{span:24}" :sm="{span:12}" :md="{span:8}" :lg="{span:6}" :xl="{span:4}" v-for="(house, index) in houses" :key="house._id" :nomor="index" style="margin-bottom: 20px">
        <house-item-card :house="house" :nomor="index"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import HouseItemCard from './HouseItemCard'

const { mapGetters, mapActions} = createNamespacedHelpers('house')

export default {
  name: 'HouseList',
  components: { HouseItemCard },
  mounted(){
    if(!this.$route.query.search){
      this.getHouses()
      }
      
  },
  computed: {
    ...mapGetters(['houses']),
  },
  methods: {
    getHouses(){
      this.$store.dispatch('house/getHouses', {
        search : null
      })
    }
  },
}
</script>

<style>

</style>

