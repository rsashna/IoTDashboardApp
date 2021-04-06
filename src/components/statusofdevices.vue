<template>
<div class="subtitle dynamic-subtitle status">
  <div class="wrapper">
    <h3 class="subtitle dynamic-subtitle"> Status of Devices </h3>
  </div>
    <div class="wrapper">
      <div class ="icon">
          <font-awesome-icon
            icon="door-open"
            size="2x"
            fixed-width
            style="color: var(--dynamic-icon-color);">
          </font-awesome-icon>
          <h3 class="subtitle dynamic-subtitle"> {{statusDoor.status_value}} </h3>
      </div>
      <div class ="icon">
          <font-awesome-icon
            icon="fan"
            size="2x"
            fixed-width
            style="color: var(--dynamic-icon-color);">
          </font-awesome-icon>
        <h3 class="subtitle dynamic-subtitle"> {{statusFan.status_value}} </h3>
      </div>
      <div class ="icon">
        <img class="image" src="./../assets/gimpfridgeTeal.png">
        <h3 class="subtitle dynamic-subtitle"> {{statusFridge.status_value}} </h3>
      </div>
      <div class ="icon">
          <font-awesome-icon
            icon="lightbulb"
            size="2x"
            fixed-width
            style="color: var(--dynamic-icon-color);">
          </font-awesome-icon>
          <h3 class="subtitle dynamic-subtitle"> {{statusLightBulb.status_value}} </h3>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data(){
    return{
      // allstats: []
        statusDoor: 'NA',
        statusFan: 'NA',
        statusFridge: 'NA',
        statusLightBulb: 'NA',
        allstats: [],
    }
  }, methods:{
  }, created(){
    axios.get('/cacheDB/deviceStatus.JSON')
    .then(response => {
      this.allstats = response.data.recordset;
      this.statusDoor = response.data.recordset[2];
      this.statusFan = response.data.recordset[3];
      this.statusFridge = response.data.recordset[1];
      this.statusLightBulb = response.data.recordset[0];
    }).catch(error => {
      console.log(error);
    })
  },
}
</script>
<style lang="scss" scoped>
.dynamic-subtitle{
  padding-bottom: 30px;
}
.icon{
  .dynamic-subtitle{
    padding-top: 0px;
    margin: 50px;
  }
  :hover{
    opacity: 0.85;
    cursor: pointer;
  }
}
.wrapper{
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
}
.status{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height:230px;
  border-style: solid;
  border-width: medium;
  border-radius: 5px;
  padding-bottom: 30px;
  padding-top: 10px;
}
.image{
  width:40px;
}
</style>
