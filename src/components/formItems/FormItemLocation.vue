<template>
  <div>
<!--     
    <el-form-item label="Longitude">
      <el-input type="number" v-model.number.lazy="mapCenter.lng"></el-input>
    </el-form-item>
    <el-form-item label="Latitude">
      <el-input type="number" v-model.number.lazy="mapCenter.lat"></el-input>
    </el-form-item> -->
    <el-form-item>
      <GmapAutocomplete @place_changed="searchChanged" class="el-input__inner" placeholder="Search location"></GmapAutocomplete>
    </el-form-item>
    <el-form-item label="House Location" :rules="ruleCoords" prop="coordsAddress">
      <gmap-map @center_changed="centerChanged" :center="mapCenter" :zoom="zoom" style="width: 100%; height: 300px">
        <gmap-marker v-if="marker" :position="marker.position" @click="center=marker.position"></gmap-marker>
      </gmap-map>
    </el-form-item>
    <el-form-item label="Address" :rules="ruleAddress" prop="coordsAddress">
      <el-input type="textarea" :rows="3" v-model="address" @change="locationChanged"></el-input>
    </el-form-item>
  </div>
</template>

<script>
import debounce from 'debounce'

export default {
  name: 'FormItemLocation',
  props: ['value'], // {coordinates :[], address : ''}
  mounted() {
    if(this.value.coordinates[0]){
      this.mapCenter = { 
        lat: this.value.coordinates[1],
        lng: this.value.coordinates[0] 
      }
      this.address = this.value.address
      this.zoom = 15
      this.marker = {
        position: this.mapCenter,
      }
    }
  },
  data() {
    return {
      zoom : 4,
      address : '',
      mapCenter: { lat: -2.4931308132648247, lng: 118.47106932500003 },
      marker: null,
      ruleCoords : {
        validator : (rule, value, cb) => {
          if(this.marker){
            cb()
          }else{
            cb(new Error('Select you house location on map'))
          }
        }
      },
      ruleAddress : {
        trigger : 'blur',
        validator : (rule, value, cb) => {
          if(this.address.length > 3) {
            cb()
          }else {
            cb(new Error('Address required'))
          }
        }
      }
    }
  },
  methods: {
    debounceMe: debounce(function(fn){fn()}, 1000),
    locationChanged() {
      this.$emit('input', {
        coordinates : [this.mapCenter.lng, this.mapCenter.lat],
        address : this.address
      })
    },
    searchChanged(place) {
      this.zoom = 15
      this.address = place.formatted_address
      this.centerChanged(place.geometry.location)
    },    
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
