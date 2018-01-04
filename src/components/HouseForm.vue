<template>
  <div > 
    <h3>{{id? 'Edit House': 'Sell New House'}}</h3>
    <hr>
    <el-form v-if="editLoaded"  :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px">
      <el-form-item label="Title" prop="title">
        <el-input v-model="ruleForm.title" placeholder="Title"></el-input>
      </el-form-item>
      <el-form-item label="Description" prop="description">
        <el-input type="textarea" v-model="ruleForm.description"></el-input>
      </el-form-item>
      <el-form-item label="Price" prop="price">
        <el-input v-model="ruleForm.price">
          <template slot="append">Juta Rupiah</template>
        </el-input>
      </el-form-item>
      <form-item-certificate v-model="ruleForm.certification"/>
      <hr>
      <el-form-item label="Surface Area" prop="surfaceArea">
        <el-input type="number" v-model="ruleForm.surfaceArea">
          <template slot="append">m
            <sup>2</sup>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="Building Area" prop="buildingArea">
        <el-input type="number" v-model="ruleForm.buildingArea">
          <template slot="append">m
            <sup>2</sup>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="Floor" prop="flooerCount">
        <el-input-number v-model="ruleForm.floorCount"></el-input-number>
      </el-form-item>
      <el-form-item label="Room" prop="roomCount">
        <el-input-number v-model="ruleForm.roomCount"></el-input-number>
      </el-form-item>
      <el-form-item label="Bathroom" prop="toiletCount">
        <el-input-number v-model="ruleForm.toiletCount"></el-input-number>
      </el-form-item>
      <el-form-item label="Maid Room" prop="maidRoomCount">
        <el-input-number v-model="ruleForm.maidRoomCount"></el-input-number>
      </el-form-item>
      <el-form-item label="Garage" prop="garageCount">
        <el-input-number  v-model="ruleForm.garageCount"></el-input-number>
      </el-form-item>
      <el-form-item label="Car Ports" prop="carportCount">
        <el-input-number v-model="ruleForm.carportCount"></el-input-number>
      </el-form-item>
      <form-item-facilities v-model="ruleForm.facilities"/> 
      <hr>
      <el-form-item label="Contact Name" prop="contactName">
        <el-input v-model="ruleForm.contact.name"></el-input>
      </el-form-item>
      <el-form-item label="Phone" prop="contactPhoneNumber">
        <el-input v-model="ruleForm.contact.phoneNumber"></el-input>
      </el-form-item>
      <hr>
      <form-item-image v-model="ruleForm.photos"/>
      <hr>
      <form-item-location v-model="ruleForm.loc.coordinates"/>
      <hr>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">{{id? 'Update': 'Create'}}</el-button>
      </el-form-item>
    </el-form>
    <br>
    <hr>
    <pre>{{JSON.stringify(ruleForm,null,2)}}</pre>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import FormItemFacilities from '@/components/formItems/FormItemFacilities'
import FormItemCertificate from '@/components/formItems/FormItemCertificate'
import FormItemImage from '@/components/formItems/FormItemImage'
import FormItemLocation from '@/components/formItems/FormItemLocation'

const { mapGetters, mapActions } = createNamespacedHelpers('house')

export default {
  name: 'HouseForm',
  props: ['mode', 'id'],
  components : {FormItemFacilities, FormItemCertificate, FormItemImage, FormItemLocation},
  mounted() {
    if (this.id) {
      this.getHouse()
    }else{
      this.editLoaded = true
    }
  },
  methods: {
    getHouse() {
      this.$store.dispatch('house/getHouse', {
        id: this.id,
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if(!valid) return false
        console.log(this.ruleForm)
        this.$store.dispatch('house/createHouse', this.ruleForm)
      })
    },
    updateValue(){
      this.ruleForm = JSON.parse(JSON.stringify(this.house))
      this.editLoaded = true
    }
  },
  computed: {
    ...mapGetters(['house'])
  },
  watch: {
    house : {
      deep: true,
      handler: function(){
        this.updateValue()
      }
    }
  },
  data() {
    return {
      editLoaded: false,
      ruleForm: {
        title: '',
        description: '',
        price: '',
        surfaceArea: '',
        buildingArea: '',
        certification: '',
        contact : {
          name : '',
          phoneNumber : '',
        },
        facilities: [],
        photos: [],
        loc: {
          type: 'Point',
          coordinates: []
        }
      },
      rules: {
        // title: [
        //   { required: true, message: 'Please input Title', trigger: 'blur' },
        //   {
        //     min: 3,
        //     max: 100,
        //     message: 'Length should be 3 to 100',
        //     trigger: 'blur',
        //   },
        // ],
        // description: [
        //   {
        //     min: 10,
        //     max: 1000,
        //     message: 'Length should be 10 to 1000',
        //     trigger: 'blur',
        //   },
        // ],
        // price: [
        //   { required: true, message: 'Price is required', trigger: 'blur' },
        //   // { type: 'number', message: 'Price must be a number',  trigger: 'blur'},
        // ],
      },
    }
  },
}
</script>

<style>

</style>
