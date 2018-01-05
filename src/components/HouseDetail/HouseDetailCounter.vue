<template>

  <el-row :gutter="20">
    <el-col :span="12">
      
      <table class="el-table el-table--fit">
        <tbody>
          <tr>
          <td>Building Area</td>
          <td>{{house.buildingArea}}</td>
        </tr>        
        <tr>
          <td>Surface Area</td>
          <td>{{house.surfaceArea}}</td>
        </tr>   
        <tr>
          <td>Certification</td>
          <td>{{house.certification}}</td>
        </tr>               
        <tr>
          <td>Floor Count</td>
          <td>{{house.floorCount}}</td>
        </tr>
        <tr>
          <td>Bed Room</td>
          <td>{{house.roomCount}}</td>
        </tr>
        </tbody>
      </table>
    </el-col>
    <el-col :span="12">
      <table class="el-table el-table--fit">
        <tr>
          <td>Bathroom</td>
          <td>{{house.toiletCount}}</td>
        </tr>        
        <tr>
          <td>Maid Room</td>
          <td>{{house.maidRoomCount}}</td>
        </tr>
        <tr>
          <td>Garage Capacity</td>
          <td>{{house.garageCount}}</td>
        </tr>
        <tr>
          <td>Car Port</td>
          <td>{{house.carportCount}}</td>
        </tr>
      </table>
    </el-col>    
  </el-row>
</template>

<script>
export default {
  name: 'HouseDetailCounter',
  props: ['house'],
}
</script>
