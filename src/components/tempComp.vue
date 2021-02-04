<template>
  <div class="summaryContainer">
    <div class="deviceIcon">
      <div class="icon">
        <font-awesome-icon
          icon="fan"
          size="2x"
          fixed-width
          style="color: var(--dynamic-icon-color);">
        </font-awesome-icon>
      </div>
      <div class="summLabel dynamic-subtitle"></div>
    </div>
    <div class="estimatesContainer">
      <div class="peaksContainer">
        <div class="summLabel dynamic-subtitle"></div>
        <div class="value dynamic-subtitle">5, 6, 7pm</div>
      </div>
      <div class="apCostContainer">
        <div class="summLabel dynamic-subtitle"></div>
        <div class="value dynamic-subtitle">$ 300</div>
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
  },
}
</script>

<style lang="scss">
.summaryContainer{
}
.summLabel{
  padding: 8px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-align: center;
  text-decoration-style: solid;
}
.icon{
  .dynamic-subtitle{
    padding-top: 0px;
    margin: 50px;
  }
}

@media (max-width: 415px) {
}
@media (max-width: 770px) {

}
</style>
