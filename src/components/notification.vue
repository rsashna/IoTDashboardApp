<template>
<div class="wrapper">
  <div v-if="showAlert" class="notifications">
  {{alertMessage}}
    </div>
</div>
</template>
<script>
import axios from "axios";
export default {
  data(){
  return{
    alertMessage: 'Alert: Door is Unlocked!  Check the livestream.',
    showAlert: false,
  }
  },
  methods:{  },
  created(){
    axios.get('/cacheDB/deviceStatus.JSON')
    .then(response => {
      this.showAlert = response.data.recordset[2].device_status;
    }).catch(error => {
      console.log(error);
    })
  },
}
</script>
<style lang="scss" scoped>
.wrapper{
  display: flex;
  width: 100%;
  height: 80px;
}
.notifications{
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #eb7a7a;
  align-items: flex-end;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 20px;
  border-style: solid;
  border-radius: 5px;
  border-bottom: 0px;
  border-top: 0px;
  border-right: 0px;
  border-color: #d94a4a;
  border-width: thick;
  font-size: 25px;
  color: white;
  font-family: "Avenir";
  font-weight: bold;
  font-style: italic;
}
@media screen and (max-width: 415px){
  .notifications{
    width: 90%;
    font-size: 18px;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (max-width: 815px){
  .notifications{
    width: 90%;
    font-size: 18px;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
