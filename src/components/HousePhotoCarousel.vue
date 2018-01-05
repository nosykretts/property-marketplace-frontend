<template>
  <el-carousel  :interval="4000"  :autoplay="false" trigger="click">
    <el-carousel-item v-for="photoUrl in photos" :key="photoUrl">
      <img :src="photoUrl"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name : 'HousePhotoCarousel',
  props : ['photos']
}
</script>

<style>
.el-carousel{
  /* background : #8e8e8e; */
  margin : 0 0 20px 0;
}
.el-carousel__container{
  height : 50vh;
}
.el-carousel__item {
 background : transparent;
 /* min-height : 300px; */
}
.el-carousel__item > img {
  /* max-width : 100%; */
  height : 100%;
  display : block;
  margin: auto auto;
  /* object-fit:none;
  object-position: 50% 50%; */
}

</style>