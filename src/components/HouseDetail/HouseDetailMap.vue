<template>
  <gmap-map v-if="mapCenter" :center="mapCenter" :zoom="15" style="width: 100%; height: 300px">
    <gmap-marker :position="marker.position" @click="center=marker.position"></gmap-marker>
  </gmap-map>
</template>

<script>
export default {
  name : 'HouseDetailMap',
  props : ['house'],
  mounted(){
    this.mapCenter = {
      lat: this.house.loc.coordinates[1],
      lng : this.house.loc.coordinates[0]
    }
    this.marker = {
      position : this.mapCenter
    }
  },
  data(){
    return {
      mapCenter : null,
      marker: null
    }
  }
}
</script>


<style scoped>

</style>
