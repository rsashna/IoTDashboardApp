<template>
  <section class="dynamic-subtitle">
    <div class="costContainer">
      <div class="title">
        <h3 class="costTitle">Estimated Costs</h3>
      </div>
      <div class="pairContainer">
        <div class="infoPair">
          <h3 class="costLabel">Weekly</h3>
          <div class="costCalc">$ 320</div>
        </div>
        <div class="infoPair">
          <h3 class="costLabel">Monthly</h3>
          <h3 class="costCalc">$ 820</h3>
        </div>
        <div class="infoPair">
            <h3 class="costLabel">Yearly</h3>
            <h3 class="costCalc">$ 13,720</h3>
        </div>
      </div>
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
  white-space: nowrap;
}
@media (max-width: 415px) {
  .costTitle{
  align-self: center;
  }
  .costContainer{
    margin-top: 5px;
    padding: 10px;
    width: auto;
    height: auto;
    justify-content: space-evenly;
  }
  .title{
    display: flex;
    flex-direction: row;
    padding: 20px;
    justify-content: center;
  }
  .pairContainer{
    display: flex;
    flex-direction: row;
  }
   .infoPair{
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
  }
}
@media (max-width: 770px) {
  .costContainer{
    margin-top: 5px;
    width: 100px;
    height: 100px;
    margin-top: 5px;
    padding: 10px;
    width: auto;
    height: auto;
    justify-content: center;
  }
  .title{
    display: flex;
    flex-direction: row;
    padding: 20px;
    justify-content: center;
  }
  .pairContainer{
    display: flex;
    flex-direction: row;
  }
   .infoPair{
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
  }
}
</style>
