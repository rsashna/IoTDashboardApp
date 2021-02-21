<template>
<div class="wrapper">
  <div v-if="showAlert" class="notifications">
  {{alertMessage}}
    </div>
</div>
</template>
<script>
export default {
  data(){
return{
  alertMessage: 'Alert: Door is Unlocked!  Check the livestream.',
  showAlert: true,
}
  },
  methods:{

  }
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

</style>
