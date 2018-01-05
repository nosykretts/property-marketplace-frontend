<template>

  <el-card :body-style="{ padding: '0px',  }" >
    <div class="stretchy-wrapper">
    <div class="image" :style="{'background-image': 'url('+ house.photos[0] + ')'}" ></div>

    </div>
    <div style="padding: 14px;">
      <span>{{house.title}}</span>
      <div class="bottom clearfix">
        <time class="time">Rp {{prettyPrice}}</time>
        <el-button type="text" class="button" @click="viewDetails">View details</el-button>
         <slot name="user-toolbox" />
      </div>
    </div>
  </el-card>
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
  computed : {
    prettyPrice(){
      return this.house.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
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
  /* height: 200px;
  padding-bottom: 75%; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

div.stretchy-wrapper {
	width: 100%;
	padding-bottom: 75%; /* 16:9 */
	position: relative;

}

div.stretchy-wrapper > div {
	position: absolute;
	top: 0; bottom: 0; left: 0; right: 0;

	color: white;
	font-size: 24px;
	text-align: center;
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