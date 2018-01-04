<template>
  <div>
    <el-form-item label="Longitude">
      <el-input type="number" v-model.number.lazy="mapCenter.lng"></el-input>
    </el-form-item>
    <el-form-item label="Latitude">
      <el-input type="number" v-model.number.lazy="mapCenter.lat"></el-input>
    </el-form-item>
    <el-form-item label="House Location">
      <gmap-map @center_changed="centerChanged" :center="mapCenter" :zoom="12" style="width: 100%; height: 300px">
        <gmap-marker :position="marker.position" :clickable="true" :draggable="true" @click="center=marker.position"></gmap-marker>
      </gmap-map>
    </el-form-item>

  </div>
</template>

<script>
import debounce from 'debounce'

export default {
  name: 'FormItemLocation',
  props: ['value'],
  mounted() {
    this.mapCenter = { lat: this.value[1], lng: this.value[0] }
    this.marker = {
      position: this.mapCenter,
    }
  },
  data() {
    console.log(typeof this.value[0], this.value[0])
    return {
      mapCenter: { lat: '', lng: '' },
      marker: {
        position: {},
      },
    }
  },
  methods: {
    locationChanged() {
      console.log('location Changed')
      this.$emit('input', [this.mapCenter.lng, this.mapCenter.lat])
    },
    debounceMe: debounce(function(fn){
      fn()
    }, 1000),  
    centerChanged(newCenter) {
      this.marker = {
        position: this.mapCenter,
      }
      this.mapCenter = {
        lat: newCenter.lat(),
        lng: newCenter.lng(),
      }
      this.debounceMe(this.locationChanged)
    },
  },
}
</script>
