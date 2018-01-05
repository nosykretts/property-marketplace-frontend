<template>
  <div > 
    <h3>{{id? 'Edit House': 'Sell New House'}}</h3>
    <hr>
    <el-form v-if="editLoaded"  :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px">
      <el-form-item label="Title" prop="title">
        <el-input v-model="ruleForm.title" placeholder="Title"></el-input>
      </el-form-item>
      <el-form-item label="Description" prop="description">
        <el-input type="textarea"  :rows="4" v-model="ruleForm.description"></el-input>
      </el-form-item>
      <el-form-item label="Price" prop="price">
        <el-input v-model.number="ruleForm.price">
          <template slot="append">Juta Rupiah</template>
        </el-input>
      </el-form-item>
      <form-item-certificate v-model="ruleForm.certification"/>
      <hr>
      <el-form-item label="Surface Area" prop="surfaceArea">
        <el-input type="number" v-model.number="ruleForm.surfaceArea">
          <template slot="append">m<sup>2</sup>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="Building Area" prop="buildingArea">
        <el-input type="number" v-model.number="ruleForm.buildingArea">
          <template slot="append">m<sup>2</sup></template>
        </el-input>
      </el-form-item>
      <el-form-item label="Floor" prop="floorCount">
        <el-input-number v-model.number="ruleForm.floorCount"></el-input-number>
      </el-form-item>
      <el-form-item label="Room" prop="roomCount">
        <el-input-number v-model.number="ruleForm.roomCount"></el-input-number>
      </el-form-item>
      <el-form-item label="Bathroom" prop="toiletCount">
        <el-input-number v-model.number="ruleForm.toiletCount"></el-input-number>
      </el-form-item>
      <el-form-item label="Maid Room" prop="maidRoomCount">
        <el-input-number v-model.number="ruleForm.maidRoomCount"></el-input-number>
      </el-form-item>
      <el-form-item label="Garage" prop="garageCount">
        <el-input-number  v-model.number="ruleForm.garageCount"></el-input-number>
      </el-form-item>
      <el-form-item label="Car Ports" prop="carportCount">
        <el-input-number v-model.number="ruleForm.carportCount"></el-input-number>
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
      <form-item-image v-model="ruleForm.photosFileList" @input="reValidate"/>
      <hr>
      <form-item-location v-model="ruleForm.coordsAddress" @input="reValidate"/>
      <hr>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">{{id? 'Update': 'Create'}}</el-button>
      </el-form-item>
    </el-form>
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
        if(this.id){
          this.$store.dispatch('house/editHouse', {
            id : this.id,
            form : this.ruleForm
          })
          .then(()=>{
            this.$router.push({name: 'myHouseList'})
          })
          .catch()
        }else{
          this.$store.dispatch('house/createHouse', {
            form : this.ruleForm
          })
          .then(()=>{
            this.$router.push({name: 'myHouseList'})
          })
          .catch()
        }
      })
    },
    reValidate(){
      this.$refs['ruleForm'].validate(valid => {})
    },
    updateValue(){
      this.ruleForm = JSON.parse(JSON.stringify(this.house))
      this.ruleForm.coordsAddress = {
        coordinates : this.house.loc.coordinates, // longlat
        address : this.house.address,
      }
      this.ruleForm.photosFileList = {
        photos : this.house.photos,
        fileList : []
      }
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
        price: 0,
        certification: '',
        surfaceArea: 0,
        buildingArea: 0,
        floorCount: 1,
        roomCount: 2,
        toiletCount: 1,
        maidRoomCount: 0,
        garageCount: 0,
        carportCount: 0,
        facilities: [],
        contact : {
          name : '',
          phoneNumber : '',
        },
        photos: [],
        photosFileList : {
          photos : [],
          fileList : [],
          counter: 0
        },
        coordsAddress : {
          coordinates : [null,null], // longlat
          address : '',
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
        price: [
          { required: true},
          { type: 'number'},
        ],
        certification: [
          {required: true}
        ],
        photosFileList: {
          validator : (rule, value, cb) => {
            if(value.counter == 0) {
              cb(new Error('Need minimum one photo'))
            }else{
              cb()
            }
          }
        },
        
      },
    }
  },
}
</script>

<style>

</style>
