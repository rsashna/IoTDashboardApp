<template>
<div class="container">
  <div class="camera" >
    <h3 class="window" v-if="show"> View Livestream of Door </h3>
    <video autoplay class="feed"></video>
    <Button class="streambutton" v-on:click="changeState(); this.turnoff='true'">{{streamButton}}</Button>
  </div>
<!-- closing the header tag -->
  </div>
</template>
<script>
export default {
  name: "camera",
  data(){
    return{
      show:true,
      streamButton: 'Turn On',
      turnoff: false,
    }
  },
  methods:{
    changeState(){
      this.init();
      this.streamButton = 'Turn Off';
      if(this.turnoff == true){
        videoPlayer.stop();
        this.show = true;
      }
    },
    init(){
      if("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices){
        navigator.mediaDevices.getUserMedia({video: true}).then( stream =>{
          const videoPlayer = document.querySelector("video");
          videoPlayer.srcObject = stream;
          videoPlayer.play();
          this.show = false;
        });
      }else{
        alert("Error: camera not working.");
      }
      }
    },
    beforeMount(){
      // just need new fn with button, when clicked; this.init(). remove v
      // this.init();
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
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  h3{
    align-self: center;
  }
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
.streambutton{
margin: 5px;
background-color: #b9f9fa;
border-radius: 2px;
border-color: #d7fcf9;
align-self: flex-end;
}
</style>
