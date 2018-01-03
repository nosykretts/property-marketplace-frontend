<template>

  <el-form-item label="Photos">
    
    <!-- <label class="el-button fileContainer el-button--info hai is-plain">
      <input type="file" @change="fileInputChanged" multiple/>
      <div style="margin-top:50%">
        <i class="el-icon-plus"></i> Add Photos</div>
    </label> -->
    <div v-for="photo in thumbs" class="hai" :style="{backgroundImage: 'url('+ photo +')'}"></div>
    <el-upload :file-list="fileList" action="" :on-remove="photoChanged" :on-change="photoChanged" list-type="picture-card" :auto-upload="false" multiple class="photo-uploader">
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
      photos: [...this.value],
      thumbs : [...this.value],
      fileList : []
    }
  },
  methods: {
    photoChanged(file, fileList) {
      this.$emit('input', {
        photos : this.photos,
        fileList : fileList.map(obj => obj.raw),
      })
    },
    fileInputChanged(e) {
      console.log('fileInputChanged', e.target.files)
      this.fileList = e.target.files
      this.thumbs = [...this.photos]
      for(let file of e.target.files){
        this.createThumb(file)
      }
      this.photoAdded()
    },
    createThumb(file) {
      let reader = new FileReader()
      reader.onload = e => {
        this.thumbs.push(e.target.result)
      }
      reader.readAsDataURL(file)
    },
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

.hellow > span > i {
  /* background: gold; */
  zoom: 2;
}

.fileContainer {
  overflow: hidden;
  position: relative;
}

.fileContainer [type='file'] {
  cursor: inherit;
  display: block;
  font-size: 999px;
  filter: alpha(opacity=0);
  min-height: 100%;
  min-width: 100%;
  opacity: 0;
  position: absolute;
  right: 0;
  text-align: right;
  top: 0;
}

.el-upload-dragger{
  /* width: 100%; */
}
</style>
