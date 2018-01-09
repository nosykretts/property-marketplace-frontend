<template>
  <div>
    <big-search/>
    <house-list/>
    
  </div>
</template>

<script>
import BigSearch from '@/components/BigSearch'
import HouseList from './HouseList'

export default {
  name: 'Home',
  components: { HouseList, BigSearch },
  data() {
    return {}
  },
}
</script>

