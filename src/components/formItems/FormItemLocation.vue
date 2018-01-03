<template>
  <div>
    <el-form-item label="Longitude">
      <el-input v-model="longitude" ></el-input>
    </el-form-item>
    <el-form-item label="Latitude">
      <el-input v-model="latitude" ></el-input>
    </el-form-item>
    <el-form-item >

      <el-button @click="locationChanged" size="mini">Update Coords</el-button>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name : 'FormItemLocation',
  props: ['value'],
  data (){
    return {
      longitude : this.value[0],
      latitude : this.value[1]
    }
  },
  methods:{
    locationChanged(){
      console.log('lo changed')
      this.$emit('input', [
        this.longitude,
        this.latitude
      ])
    }
  }
}
</script>
