<template>
  <section class="subtitle dynamic-subtitle">
    <div class="costContainer">
      <div class="costTitle">Estimated Costs</div>
      <div class="costLabel">Weekly</div>
      <div class="costCalc">$ 320</div>
      <div class="costLabel">Monthly</div>
      <div class="costCalc">$ 820</div>
      <div class="costLabel">Yearly</div>
      <div class="costCalc">$ 13,720</div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss">
.costContainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  height: 300px;
  margin-top: 20px;
  border-style: solid;
  border-width: medium;
  border-radius: 5px;
}
.costTitle{
  padding: 8px;
  padding-bottom: 15px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  text-decoration-style: solid;
  // color: cyan;
}
.costLabel{
  padding: 8px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-align: center;
  text-decoration-style: solid;
}
.costCalc{
  padding: 8px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  text-decoration-style: solid;
}
@media (max-width: 415px) {
  .costContainer{
    padding: 50px, 50px, 0px, 0px;
  }
}
@media (max-width: 770px) {
  .costContainer{
    padding: 50px, 50px, 0px, 0px;
  }
}
</style>
