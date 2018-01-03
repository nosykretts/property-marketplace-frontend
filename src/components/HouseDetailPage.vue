<template>
  <div>
    <house-photo-carousel :photos="house.photos" />
    <el-card class="box-card title-desc">
      <h1>{{house.title}}</h1>
      <p>{{house.description}}</p>
    </el-card>
    <el-tabs type="border-card" tab-position="top">
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-menu"></i> Specification Detail</span>
        <el-row :gutter="20">
          <el-col>
            <table>
              <tbody>

              </tbody>
            </table>
          </el-col>
          <el-col></el-col>
        </el-row>
        <pre>{{JSON.stringify(house,null,2)}}</pre>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-location"></i> Map Location</span>
        wwewewe
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import HousePhotoCarousel from './HousePhotoCarousel'
const { mapGetters, mapActions } = createNamespacedHelpers('house')

export default {
  name: 'HouseDetailPage',
  props: ['id'],
  components: { HousePhotoCarousel },
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
  },
}
</script>

<style>
.title-desc {
  margin-bottom: 20px;
}
</style>
