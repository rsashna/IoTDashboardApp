<template>
<div class="container">
  <div class="camera" >
    <h3 class="window" v-if="show" @click="{display: none}"> View Livestream of Door </h3>
    <video autoplay class="feed"></video>
  </div>
<!-- closing the header tag -->
  </div>
</template>
<script>
export default {
  name: "camera",
  data(){
    return{
      show:true
    }
  },
  methods:{
    init(){
      if("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices){
        navigator.mediaDevices.getUserMedia({video: true}).then( stream =>{
          const videoPlayer = document.querySelector("video");
          videoPlayer.srcObject = stream;
          videoPlayer.play();
          // data().return({show: false});
        });
      }else{
        alert("Error: camera not working.");
      }
      }
    },
    beforeMount(){
      this.init();
    }

}
</script>
<style lang="scss" scoped>
.window{
  padding-bottom: 30px;
  color: #b9f9fa;
}
.camera{
  align-items: center;
  display: flex;
  justify-content: space-evenly;
}
.feed{
  display: block;
  width: 100%;
  max-width: 500px;
}
.container{
  padding: 30px;
  align-items: center;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  height: 220px;
  width: 210px;
  background-color: #2c3e50;
}
</style>
