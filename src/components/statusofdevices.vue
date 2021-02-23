<template>
<div class="subtitle dynamic-subtitle status">
  <div class="wrapper" >
    <h3 class="subtitle dynamic-subtitle"> Status of Devices </h3>
</div>
    <div class="wrapper" >
      <div class ="icon" >
          <font-awesome-icon
            icon="door-open"
            size="2x"
            fixed-width
            style="color: var(--dynamic-icon-color);">
          </font-awesome-icon>
          <h3 class="subtitle dynamic-subtitle"> {{statusText.statusDoor}} </h3>
      </div>
      <div class ="icon" >
          <font-awesome-icon
            icon="fan"
            size="2x"
            fixed-width
            style="color: var(--dynamic-icon-color);">
          </font-awesome-icon>
        <h3 class="subtitle dynamic-subtitle"> {{statusText.statusFan}} </h3>
      </div>
      <div class ="icon" >
        <img class="image" src="./../assets/gimpfridgeTeal.png">
        <h3 class="subtitle dynamic-subtitle"> {{statusText.statusFridge}} </h3>
      </div>
      <div class ="icon" >
          <font-awesome-icon
            icon="lightbulb"
            size="2x"
            fixed-width
            style="color: var(--dynamic-icon-color);">
          </font-awesome-icon>
          <h3 class="subtitle dynamic-subtitle"> {{statusText.statusLightBulb}} </h3>
      </div>
    </div>
  </div>
</template><script>
export default {
  data(){
    return{
      statusText:{
            statusDoor: 'ON',
            statusFan: 'ON',
            statusFridge: 'ON',
            statusLightBulb: 'ON',
      }
    }
  },  methods:{
  },
}
</script><style lang="scss" scoped>.dynamic-subtitle{
  padding-bottom: 30px;
}.icon{
  .dynamic-subtitle{
    padding-top: 0px;
    margin: 50px;
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
