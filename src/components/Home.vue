<template>
  <div>
    <h1>This is Home</h1>
    <house-list/>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import HouseList from './HouseList'

export default {
  name: 'Home',
  components : {HouseList},
  data() {
    return {
    }
  },
}
</script>

