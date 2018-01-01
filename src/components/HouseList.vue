<template>
  <div>
    <h1>This is House List</h1>
    <el-button @click="getHouses">Get Houses</el-button>
    <hr>
    <el-row :gutter="20" type="flex" justify="space-between" class="houses-container">
      <el-col :xs="{span:24}" :sm="{span:12}" :md="{span:8}" :lg="{span:6}" :xl="{span:4}" v-for="(house, index) in houses" :key="house._id" :nomor="index" style="margin-bottom: 20px">
        <house-item-card :house="house" :nomor="index"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const { mapGetters, mapActions} = createNamespacedHelpers('house')
import HouseItemCard from './HouseItemCard'

export default {
  name: 'HouseList',
  components: { HouseItemCard },
  mounted(){
    this.getHouses()
  },
  computed: {
    ...mapGetters(['houses']),
  },
  methods: {
    ...mapActions(['getHouses']),
  },
}
</script>

<style>
.houses-container{
  flex-wrap: wrap;
}
</style>

