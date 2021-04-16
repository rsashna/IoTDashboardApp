const axios = require('axios');
var fs = require('fs');
const {performance} = require('perf_hooks');

var startM = performance.now();
// local rates in $/kWh
var off_peak = 0.085;
var mid_peak = 0.119;
var on_peak = 0.179;

var wOnPeakF =2;
var wOffPeakF =2;
var wMidPeakF =2;
var wOnPeakFr =2;
var wOffPeakFr =2;
var wMidPeakFr =2;
var wOnPeakB =2;
var wOffPeakB =2;
var wMidPeakB =2;

var mOnPeakF =2;
var mOffPeakF =2;
var mMidPeakF =2;
var mOnPeakFr =2;
var mOffPeakFr =2;
var mMidPeakFr =2;
var mOnPeakB =2;
var mOffPeakB =2;
var mMidPeakB =2;

var yOnPeakF =2;
var yOffPeakF =2;
var yMidPeakF =2;
var yOnPeakFr =2;
var yOffPeakFr =2;
var yMidPeakFr =2;
var yOnPeakB =2;
var yOffPeakB =2;
var yMidPeakB =2;

var weeklyFan;
var weeklyFridge;
var weeklyBulb;
var monthlyFan;
var monthlyFridge;
var monthlyBulb;
var yearlyFan;
var yearlyFridge;
var yearlyBulb;

var weeklyCost;
var monthlyCost;
var yearlyCost;

// data();
function makeGetRequest(path) {
    return new Promise(function (resolve) {
axios.get('http://localhost:8080//cacheDB/weeklyFanUse.JSON')
    .then(response => {
    wOnPeakF = response.data.recordset[0].onPk / 1000;
    wOffPeakF = response.data.recordset[0].offPk / 1000;
    wMidPeakF = response.data.recordset[0].midPk / 1000;
    resolve(wOnPeakF ,wOffPeakF ,wMidPeakF);
    // console.log(wOnPeakF ,wOffPeakF ,wMidPeakF);
    }).catch(error => {
      console.log(error);
    });

    axios.get('http://localhost:8080//cacheDB/monthlyFanUse.JSON')
    .then(response => {
    mOnPeakF = response.data.recordset[0].onPk / 1000;
    mOffPeakF = response.data.recordset[0].offPk / 1000;
    mMidPeakF = response.data.recordset[0].midPk / 1000;
    resolve(mOnPeakF ,mOffPeakF ,mMidPeakF);
    // console.log(mOnPeakF ,mOffPeakF ,mMidPeakF);
    }).catch(error => {
      console.log(error);
    });
    axios.get('http://localhost:8080//cacheDB/yearlyFanUse.JSON')
    .then(response => {
    yOnPeakF = response.data.recordset[0].onPk / 1000;
    yOffPeakF = response.data.recordset[0].offPk / 1000;
    yMidPeakF = response.data.recordset[0].midPk / 1000;
    resolve(yOnPeakF ,yOffPeakF ,yMidPeakF);
    // console.log(yOnPeakF ,yOffPeakF ,yMidPeakF);
    }).catch(error => {
      console.log(error);
    });


    axios.get('http://localhost:8080//cacheDB/weeklyFridgeUse.JSON')
    .then(response => {
    wOnPeakFr = response.data.recordset[0].onPk / 1000;
    wOffPeakFr = response.data.recordset[0].offPk / 1000;
    wMidPeakFr = response.data.recordset[0].midPk / 1000;
    resolve(wOnPeakFr, wOffPeakFr, wMidPeakFr);
    // console.log(wOnPeakFr, wOffPeakFr, wMidPeakFr);
    }).catch(error => {
      console.log(error);
    });
    axios.get('http://localhost:8080//cacheDB/monthlyFridgeUse.JSON')
    .then(response => {
    mOnPeakFr = response.data.recordset[0].onPk / 1000;
    mOffPeakFr = response.data.recordset[0].offPk / 1000;
    mMidPeakFr = response.data.recordset[0].midPk / 1000;
    resolve(mOnPeakFr,mOffPeakFr ,mMidPeakFr);
    // console.log(mOnPeakFr,mOffPeakFr ,mMidPeakFr);
    }).catch(error => {
      console.log(error);
    });
    axios.get('http://localhost:8080//cacheDB/yearlyFridgeUse.JSON')
    .then(response => {
    yOnPeakFr = response.data.recordset[0].onPk / 1000;
    yOffPeakFr = response.data.recordset[0].offPk / 1000;
    yMidPeakFr = response.data.recordset[0].midPk / 1000;
    resolve(yOnPeakFr, yOffPeakFr , yMidPeakFr);
    console.log(yOnPeakFr, yOffPeakFr , yMidPeakFr);
    }).catch(error => {
      console.log(error);
    });


    axios.get('http://localhost:8080//cacheDB/weeklyBulbUse.JSON')
    .then(response => {
    wOnPeakB = response.data.recordset[0].onPk / 1000;
    wOffPeakB = response.data.recordset[0].offPk / 1000;
    wMidPeakB = response.data.recordset[0].midPk / 1000;
    // console.log("wOnPeakB: " + wOnPeakB, wOffPeakB, wMidPeakB);
    resolve(wOnPeakB, wOffPeakB, wMidPeakB);
    // console.log(wOnPeakB, wOffPeakB, wMidPeakB);
    }).catch(error => {
      console.log(error);
    });
    axios.get('http://localhost:8080//cacheDB/monthlyBulbUse.JSON')
    .then(response => {
    mOnPeakB = response.data.recordset[0].onPk / 1000;
    mOffPeakB = response.data.recordset[0].offPk / 1000;
    mMidPeakB = response.data.recordset[0].midPk / 1000;
    resolve(mOnPeakB, mOffPeakB , mMidPeakB);
    // console.log(mOnPeakB, mOffPeakB , mMidPeakB);
    }).catch(error => {
      console.log(error);
    });
    axios.get('http://localhost:8080//cacheDB/yearlyBulbUse.JSON')
    .then(response => {
    yOnPeakB = response.data.recordset[0].onPk / 1000;
    yOffPeakB = response.data.recordset[0].offPk / 1000;
    yMidPeakB = response.data.recordset[0].midPk / 1000;
    resolve(yOnPeakB, yOffPeakB , yMidPeakB);
    //console.log(yOnPeakB, yOffPeakB , yMidPeakB);
    if(yMidPeakB !== 2){
    weeklyFan = wOnPeakF * on_peak + wOffPeakF * off_peak + wMidPeakF * mid_peak;
    weeklyFridge = wOnPeakFr * on_peak + wOffPeakFr * off_peak + wMidPeakFr *mid_peak;
    weeklyBulb = wOnPeakB * on_peak + wOffPeakB * off_peak + wMidPeakB * mid_peak;

    monthlyFan = mOnPeakF * on_peak + mOffPeakF * off_peak + mMidPeakF * mid_peak;
    monthlyFridge = mOnPeakFr * on_peak + mOffPeakFr * off_peak + mMidPeakFr *mid_peak;
    monthlyBulb = mOnPeakB * on_peak + mOffPeakB * off_peak + mMidPeakB * mid_peak;

    yearlyFan = yOnPeakF * on_peak + yOffPeakF * off_peak + yMidPeakF * mid_peak;
    yearlyFridge = yOnPeakFr * on_peak + yOffPeakFr * off_peak + yMidPeakFr* mid_peak;
    yearlyBulb = yOnPeakB * on_peak + yOffPeakB * off_peak + yMidPeakB * mid_peak ;
    }
    // these too
    if(yearlyBulb){
    weeklyCost = weeklyFan + weeklyFridge + weeklyBulb;
    monthlyCost = monthlyFan + monthlyFridge + monthlyBulb;
    yearlyCost = yearlyFan + yearlyFridge + yearlyBulb;

    console.log("calc!"+yOnPeakF, on_peak, yOffPeakF, off_peak, yMidPeakF, mid_peak);
    console.log("cant be NAN" + weeklyCost, monthlyCost, yearlyCost,
     weeklyFan, weeklyFridge, weeklyBulb,
     monthlyFan, monthlyFridge, monthlyBulb,
     yearlyFan, yearlyFridge, yearlyBulb);

      var calcCosts = JSON.stringify(
        [{ weeklyCost: Number(weeklyCost),
         monthlyCost: Number(monthlyCost),
         yearlyCost: Number(yearlyCost) }]
      );
      fs.writeFile('./../../../public/cacheDB/estCosts.JSON', calcCosts, written);
      console.log(calcCosts);
      console.log('CalcCost File write complete');
      function written(err){
      console.log(err);
      }

      var summaryCosts = JSON.stringify(
        [{ yearlyFan: Number(yearlyFan),
         yearlyFridge: Number(yearlyFridge),
         yearlyBulb: Number(yearlyBulb) }]
      );
      fs.writeFile('./../../../public/cacheDB/sumCosts.JSON', summaryCosts, written);
      // console.log(calcCosts);
      console.log('SumCost File write complete');
      var timeM = performance.now() - startM;
      var msg ="\ncalculateCosts.js " + timeM;
      fs.writeFile('./helpers/dataFetchTimes.JSON', msg, {'flag':'a'}, written);
      function written(err){
      console.log(err);
      }
    }

    }).catch(error => {
      console.log(error);
    });

  });
  }


  async function main() {
      var result = await makeGetRequest();
  }
  main();
