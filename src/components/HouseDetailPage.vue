<template>
  <div >
    <big-search/>
    <div v-if="loaded"> 
      <house-photo-carousel :photos="house.photos" />
      <el-card class="box-card space-bottom">
        <h1>{{house.title}}</h1>
        <p>{{house.description}}</p>
        <h1><big>Rp {{prettyPrice}}</big></h1>
      </el-card>
      <el-tabs type="border-card" tab-position="top" class="space-bottom">
        <el-tab-pane>
          <span slot="label">
            <i class="el-icon-menu"></i> House Detail</span>
          <house-detail-counter :house="house"/>
          <br>
          <h3>House Facilities: </h3>
          <div>
            <el-tag v-for="facility in house.facilities" type="primary" :key="facility">{{facility}}</el-tag>
          </div>
          <hr>
          <div>
            <h3>House Address: </h3>
            <p>{{house.address}}</p>
          </div>
          <hr>
          <div>
            <h3>Contact Information:</h3>
            <p><strong>Name:</strong> {{house.contact.name}}</p>
            <p><strong>Phone Number:</strong> {{house.contact.phoneNumber}}</p>
          </div>
          <hr>
          <div>
            <h3>Ads Posted by:</h3>
            <p><strong>Name:</strong> {{house.creator.name}}</p>
            <p><strong>Email:</strong> {{house.creator.email}}</p>
          </div>          
        </el-tab-pane>
      </el-tabs>
      <el-card class="box-card ">
         <house-detail-map :house="house"/>
      </el-card>      
      <!-- <pre>{{JSON.stringify(house,null,2)}}</pre> -->
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import HouseDetailCounter from '@/components/HouseDetail/HouseDetailCounter'
import HouseDetailMap from '@/components/HouseDetail/HouseDetailMap'
import BigSearch from '@/components/BigSearch'
import HousePhotoCarousel from './HousePhotoCarousel'

const { mapGetters } = createNamespacedHelpers('house')

export default {
  name: 'HouseDetailPage',
  props: ['id'],
  components: { HousePhotoCarousel, BigSearch, HouseDetailCounter, HouseDetailMap },
  data() {
    return {
      loaded: false,
    }
  },
  mounted() {
    this.getHouse()
  },
  methods: {
    getHouse() {
      this.$store.dispatch('house/getHouse', {
        id: this.id,
      })
    },
  },
  computed: {
    ...mapGetters(['house']),
    prettyPrice() {
      return this.house.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
  },
  watch: {
    house() {
      this.loaded = true
    },
  },
}
</script>

<style>
.title-desc {
  margin-bottom: 20px;
}
.el-tag {
  margin-right: 10px;
  margin-bottom : 10px;
}
.space-bottom{
  margin-bottom: 20px;
}
</style>
