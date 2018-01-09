<template>
  <div>
   
    <el-button @click="createClicked">Sell New House</el-button>
    <hr>
    <el-row :gutter="20" type="flex" justify="space-between" class="houses-container" v-loading="false">
      <el-col :xs="{span:24}" :sm="{span:12}" :md="{span:8}" :lg="{span:6}" :xl="{span:4}" v-for="(house, index) in myHouses" :key="house._id" :nomor="index" style="margin-bottom: 20px">
        <house-item-card :house="house" :nomor="index">
          <div slot="user-toolbox">
              <hr>
              <el-button size="mini" @click="editClicked(house._id)">Edit</el-button>
              <el-button size="mini" @click="deleteClicked(house._id)">Delete</el-button>
          </div>          
        </house-item-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import HouseItemCard from './HouseItemCard'

const { mapGetters, mapActions } = createNamespacedHelpers('house')

export default {
  name: 'MyHouses',
  components: { HouseItemCard },
  mounted() {
    this.getMyHouses()
  },
  methods: {
    ...mapActions(['getMyHouses']),
    editClicked(id) {
      this.$router.push({
        name: 'houseEdit',
        params: { id },
      })
    },
    createClicked() {
      this.$router.push({
        name: 'houseCreate',
      })
    },
    deleteClicked(id) {
      this.$store.dispatch('house/deleteHouse', { id })
    },
  },
  computed: {
    ...mapGetters(['myHouses']),
  },
}
</script>
