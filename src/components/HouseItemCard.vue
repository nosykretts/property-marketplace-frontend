<template>
  <el-card :body-style="{ padding: '0px'}">
    <div class="image" :style="{'background-image': 'url('+ house.photos[0] + ')'}"></div>
    <div style="padding: 14px;">
      <span>{{house.title}}</span>
      <div class="bottom clearfix">
        <time class="time">03-01-1990</time>
        <el-button type="text" class="button">View Details</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'HouseItemCard',
  props: ['house'],
}
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

div.image {
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>