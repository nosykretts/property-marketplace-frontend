<template>
  <el-form-item label="Facilities" props="facilities">
    <el-select
      style="width: 100%;"
      v-model="value10"
      @change="inputChanged"
      multiple
      filterable
      allow-create
      default-first-option
      placeholder="Choose or add your house facilities">
      <el-option
        v-for="item in options5"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </el-form-item>
</template>
<script>
  const defaultFacilities = ['Pusat Bisnis', 'Dekat Kawasan Bisnis', 'Bebas Banjir', 'Masuk Mobil', 'Dekat Pusat Perbelanjaan', 'Dekat Jalan Raya', 'Dekat Sekolah', 'Lingkungan Aman']

  export default {
    name: 'FormItemFacilities',
    props: ['value'],
    data() {
      const opt = [
        ...this.value,
        ...defaultFacilities,
      ]
        .filter((fas, index, arr) => arr.indexOf(fas) === index)
        .map(fas => ({ label: fas, value: fas }))
      console.log('opt', opt)
      return {
        options5: opt,
        value10: this.value,
      }
    },
    methods: {
      inputChanged() {
        this.$emit('input', this.value10)
      },
    },
  }
</script>