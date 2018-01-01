<template>
  <transition name="el-fade-in">

    <el-card :body-style="{ padding: '0px'}">
      <transition name="el-fade-in">
        <div class="image" :style="{'background-image': 'url('+ house.photos[0] + ')'}"></div>
      </transition>
      <div style="padding: 14px;">
        <span>{{house.title}}</span>
        <div class="bottom clearfix">
          <time class="time">{{house.price}}</time>
          <el-button type="text" class="button" @click="viewDetails">View details</el-button>
        </div>
      </div>
    </el-card>
  </transition>
</template>

<script>
export default {
  name: 'HouseItemCard',
  props: ['house'],
  methods: {
    viewDetails() {
      this.$router.push({
        name: 'houseDetail',
        params: {
          id: this.house._id,
        },
      }) // -> /user/123
    },
  },
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