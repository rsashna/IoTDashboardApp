<template>
<div class="status">
  <div class="wrapper" >
<h3 class="subtitle dynamic-subtitle"> Status of Devices </h3>
</div>
<!-- closing the header tag -->
<div class="wrapper" >
<div class ="icon" >
<img class="image" src="./../assets/Door.png"/>
<h3 class="subtitle dynamic-subtitle"> ON </h3>
</div>
<div class ="icon" >
<img class="image" src="./../assets/fan.png"/>
<h3 class="subtitle dynamic-subtitle"> OFF </h3>
</div>
<div class ="icon" >
<img class="image" src="./../assets/Fridge.png"/>
<h3 class="subtitle dynamic-subtitle"> ON </h3>
</div>
<div class ="icon" >
<img class="image" src="./../assets/bulb.png"/>
<h3 class="subtitle dynamic-subtitle"> OFF </h3>
</div>
</div>
  </div>


</template>

<script>
export default {
  data(){
return{
}
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>

.dynamic-subtitle{
  padding-bottom: 30px;
}

.icon{
  .dynamic-subtitle{
    padding-top: 0px;
  }
}
.wrapper{
  display: flex;
  justify-content: space-evenly;
}
.status{
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 500px;
  height:250px;
  background-color: #2c3e50;
}
.image{
  padding: 10px;
  width:50px;
}
</style>
