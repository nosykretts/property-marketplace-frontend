<template>
  <el-form-item label="Certification" prop="certification">
    <el-select v-model="certification" placeholder="Select" @change="selectChanged" style="min-width:300px;">
      <el-option v-for="item in certificationOptions" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'FormItemCertificate',
  props: ['value'],
  methods:{
    selectChanged(){
      this.$emit('input', this.certification)
    }
  },
  data (){
    return {
      certification: this.value,
      certificationOptions: [
          {
            value: 'Sertifikat Hak Milik (SHM)',
            label: 'Sertifikat Hak Milik (SHM)',
          },
          {
            value: 'Sertifikat Hak Guna Bangunan (SHGB)',
            label: 'Sertifikat Hak Guna Bangunan (SHGB)',
          },
          {
            value: 'Girik',
            label: 'Girik',
          },
          {
            value: 'Akta Jual Beli (AJB)',
            label: 'Akta Jual Beli (AJB)',
          },
          {
            value: 'Other',
            label: 'Other',
          },
        ],      
    }
  },
  
}
</script>
