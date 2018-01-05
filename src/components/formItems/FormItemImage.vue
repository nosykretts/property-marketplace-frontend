<template>

  <el-form-item label="Photos" prop="photosFileList">
    
    <!-- <label class="el-button fileContainer el-button--info hai is-plain">
      <input type="file" @change="fileInputChanged" multiple/>
      <div style="margin-top:50%">
        <i class="el-icon-plus"></i> Add Photos</div>
    </label> -->
   <!-- <el-input v-model.number="counter"></el-input> -->
    <div v-for="photoUrl in thumbs" @click="deletePhoto(photoUrl)"  class="hai" :style="{backgroundImage: 'url('+ photoUrl +')'}"></div>
    <el-upload  action="" :on-remove="fileInputChanged" :on-change="fileInputChanged" list-type="picture-card" :auto-upload="false" multiple class="photo-uploader">
      <i class="el-icon-plus"></i>
    </el-upload>
    
  </el-form-item>
</template>

<script>
export default {
  name: 'FormItemImage',
  props: ['value'],
  mounted() {},
  data() {
    return {
      photos: [...this.value.photos],
      thumbs : [...this.value.photos],
      fileList : []
    }
  },
  methods: {
    fileInputChanged(file, fileList) {
      this.fileList = fileList.map(obj => obj.raw)
      this.emitInput()
    },
    emitInput(){
      this.$emit('input', {
        photos : this.photos,
        fileList : this.fileList,
        counter : this.fileList.length + this.photos.length,
      })
    },
    deletePhoto(photoUrl){
      this.photos = this.photos.filter(photo => photo !== photoUrl)
      this.thumbs = this.photos
      this.emitInput()
    }
    // x(e) {
    //   console.log('fileInputChanged', e.target.files)
    //   this.fileList = e.target.files
    //   this.thumbs = [...this.photos]
    //   for(let file of e.target.files){
    //     this.createThumb(file)
    //   }
    //   this.counter = this.fileList.length + this.photos.length
    //   this.photoAdded()
    // },
    // createThumb(file) {
    //   let reader = new FileReader()
    //   reader.onload = e => {
    //     this.thumbs.push(e.target.result)
    //   }
    //   reader.readAsDataURL(file)
    // },
  },
}
</script>

<style>
.hai {
  /* display: block; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  float: left;
  margin: 0 8px 8px 0;
  border-radius: 4px;
  height: 148px;
  width: 148px;
  display: flex;
}
</style>
