<template>
<div class="container">
  <div class="camera" >
    <h3 class="window" v-if="showLabel"> View Livestream of Door </h3>
    <video id="video" autoplay class="feed"></video>
    <Button class="streambutton" v-on:click="toggleState();">{{streamButton}}</Button>
  </div>
</div>
</template>
<script>
var localstream;
var stream;
export default {
  name: "camera",
  data(){
    return{
      showLabel: true,
      streamButton: 'Turn On',
      turnoff: false,
    }
  },
  methods:{
    toggleState(){
      if(this.streamButton == 'Turn On'){
        this.init();
        this.streamButton = 'Turn Off';
      }else if(this.streamButton == 'Turn Off'){
        localstream.getVideoTracks()[0].stop();
        localstream.getTracks().forEach(track => track.stop())
        this.showLabel = true;
        document.getElementById("video").style.display = "none";
        this.streamButton = 'Turn On';
      }
    },
    init(){
          if("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices){
            navigator.mediaDevices.getUserMedia({video: true}).then( stream =>{
            const  videoPlayer = document.querySelector("video");
              videoPlayer.srcObject = stream;
                localstream = stream;
              videoPlayer.play();
              this.showLabel = false;
              document.getElementById("video").style.display = "flex";
            });
          }else{
            alert("Error: camera not working.");
          }
    },
    beforeMount(){
    },
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
    padding-left: 30px;
    padding-right: 30px;
    align-self: center;
  }
}
.feed{
  display: block;
  width: 100%;
  max-width: 500px;
}
.container{
  align-items: center;
  border-radius: 5px;
  display: flex;
  justify-content: center;
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
