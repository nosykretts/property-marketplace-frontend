<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import HouseItemCard from './HouseItemCard'

const { mapGetters, mapActions } = createNamespacedHelpers('house')

export default {
  name: 'MyHouses',
  
}
</script>
