<template>
  <section class="dynamic-subtitle">
    <div class="costContainer">
      <div class="title">
        <div class="costTitle">Estimated Costs</div>
      </div>
      <div class="pairContainer">
        <div class="infoPair">
          <div class="costLabel">Weekly</div>
          <div class="costCalc">$ {{weeklyval}}</div>
        </div>
        <div class="infoPair">
          <div class="costLabel">Monthly</div>
          <div class="costCalc">$ {{monthlyval}}</div>
        </div>
        <div class="infoPair">
            <div class="costLabel">Yearly</div>
            <div class="costCalc">$ {{yearlyval}}</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data(){
return{
  weeklyval: [],
  monthlyval: [],
  yearlyval: [],
}
  },
  methods:{
  },
  beforeCreate(){
    axios.get('/cacheDB/estCosts.JSON')
    .then(response => {
      // this.allstats = response.data.recordset;
      this.weeklyval = response.data[0].weeklyCost.toFixed(2);
      this.monthlyval = response.data[0].monthlyCost.toFixed(2);
      this.yearlyval = response.data[0].yearlyCost.toFixed(2);
    }).catch(error => {
      console.log(error);
    })
  },
}
</script>
<style lang="scss">
.costContainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  height: 340px;
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
    justify-content: space-around;
  }
   .infoPair{
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 150px;
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
    justify-content: space-around;
  }
   .infoPair{
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 150px;
  }
}
</style>
