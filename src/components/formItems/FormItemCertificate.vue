<template>
  <el-form-item label="Certification" prop="certification">
    <el-select v-model="certification" placeholder="Select" @change="selectChanged">
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
            value: 'CERT-A',
            label: 'CERT-A',
          },
          {
            value: 'CERT-B',
            label: 'CERT-B',
          },
          {
            value: 'CERT-C',
            label: 'CERT-C',
          },
          {
            value: 'CERT-D',
            label: 'CERT-D',
          },
          {
            value: 'CERT-E',
            label: 'CERT-E',
          },
        ],      
    }
  },
  
}
</script>
