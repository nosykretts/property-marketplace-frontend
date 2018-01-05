<template>
  <div>
    <big-search/>
    <house-list/>
    
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import HouseList from './HouseList'
import BigSearch from '@/components/BigSearch'
export default {
  name: 'Home',
  components: { HouseList, BigSearch },
  data() {
    return {}
  },
}
</script>

