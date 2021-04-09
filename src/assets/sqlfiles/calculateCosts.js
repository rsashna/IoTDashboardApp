const axios = require('axios');
var fs = require('fs');
// local rates in $/kWh
var off_peak = 8.5;
var mid_peak = 11.9;
var on_peak = 17.9;

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

var  weeklyCost;
var monthlyCost;
var yearlyCost;

//     return{
// wOnPeakF : 2,
// wOffPeakF: 2,
// wMidPeakF: 2,
// wOnPeakFr: 2,
// wOffPeakFr: 2,
// wMidPeakFr: 2,
// wOnPeakB: 2,
// wOffPeakB: 2,
// wMidPeakB: 2,
// mOnPeakF: 2,
// mOffPeakF: 2,
// mMidPeakF: 2,
// mOnPeakFr: 2,
// mOffPeakFr: 2,
// mMidPeakFr: 2,
// mOnPeakB: 2,
// mOffPeakB: 2,
// mMidPeakB: 2,
// yOnPeakF: 2,
// yOffPeakF: 2,
// yMidPeakF: 2,
// yOnPeakFr: 2,
// yOffPeakFr: 2,
// yMidPeakFr: 2,
// yOnPeakB: 2,
// yOffPeakB: 2,
// yMidPeakB: 2
// }
// }

// data();
function makeGetRequest(path) {
    return new Promise(function (resolve) {
axios.get('http://localhost:8080//cacheDB/weeklyFanUse.JSON')
    .then(response => {
    wOnPeakF = response.data.recordset[0].onPk;
    wOffPeakF = response.data.recordset[0].offPk;
    wMidPeakF = response.data.recordset[0].midPk;
    resolve(wOnPeakF ,wOffPeakF ,wMidPeakF);
    console.log(wOnPeakF ,wOffPeakF ,wMidPeakF);
    }).catch(error => {
      console.log(error);
    });

    axios.get('http://localhost:8080//cacheDB/monthlyFanUse.JSON')
    .then(response => {
    mOnPeakF = response.data.recordset[0].onPk;
    mOffPeakF = response.data.recordset[0].offPk;
    mMidPeakF = response.data.recordset[0].midPk;
    resolve(mOnPeakF ,mOffPeakF ,mMidPeakF);
    console.log(mOnPeakF ,mOffPeakF ,mMidPeakF);
    }).catch(error => {
      console.log(error);
    });
    axios.get('http://localhost:8080//cacheDB/yearlyFanUse.JSON')
    .then(response => {
    yOnPeakF = response.data.recordset[0].onPk;
    yOffPeakF = response.data.recordset[0].offPk;
    yMidPeakF = response.data.recordset[0].midPk;
    resolve(yOnPeakF ,yOffPeakF ,yMidPeakF);
    console.log(yOnPeakF ,yOffPeakF ,yMidPeakF);
    }).catch(error => {
      console.log(error);
    });


    axios.get('http://localhost:8080//cacheDB/weeklyFridgeUse.JSON')
    .then(response => {
    wOnPeakFr = response.data.recordset[0].onPk;
    wOffPeakFr = response.data.recordset[0].offPk;
    wMidPeakFr = response.data.recordset[0].midPk;
    resolve(wOnPeakFr, wOffPeakFr, wMidPeakFr);
    console.log(wOnPeakFr, wOffPeakFr, wMidPeakFr);
    }).catch(error => {
      console.log(error);
    });
    axios.get('http://localhost:8080//cacheDB/monthlyFridgeUse.JSON')
    .then(response => {
    mOnPeakFr = response.data.recordset[0].onPk;
    mOffPeakFr = response.data.recordset[0].offPk;
    mMidPeakFr = response.data.recordset[0].midPk;
    resolve(mOnPeakFr,mOffPeakFr ,mMidPeakFr);
    console.log(mOnPeakFr,mOffPeakFr ,mMidPeakFr);
    }).catch(error => {
      console.log(error);
    });
    axios.get('http://localhost:8080//cacheDB/yearlyFridgeUse.JSON')
    .then(response => {
    yOnPeakFr = response.data.recordset[0].onPk;
    yOffPeakFr = response.data.recordset[0].offPk;
    yMidPeakFr = response.data.recordset[0].midPk;
    resolve(yOnPeakFr, yOffPeakFr , yMidPeakFr);
    console.log(yOnPeakFr, yOffPeakFr , yMidPeakFr);
    }).catch(error => {
      console.log(error);
    });


    axios.get('http://localhost:8080//cacheDB/weeklyBulbUse.JSON')
    .then(response => {
    wOnPeakB = response.data.recordset[0].onPk;
    wOffPeakB = response.data.recordset[0].offPk;
    wMidPeakB = response.data.recordset[0].midPk;
    console.log("wOnPeakB: " + wOnPeakB, wOffPeakB, wMidPeakB);
    resolve(wOnPeakB, wOffPeakB, wMidPeakB);
    console.log(wOnPeakB, wOffPeakB, wMidPeakB);
    }).catch(error => {
      console.log(error);
    });
    axios.get('http://localhost:8080//cacheDB/monthlyBulbUse.JSON')
    .then(response => {
    mOnPeakB = response.data.recordset[0].onPk;
    mOffPeakB = response.data.recordset[0].offPk;
    mMidPeakB = response.data.recordset[0].midPk;
    resolve(mOnPeakB, mOffPeakB , mMidPeakB);
    console.log(mOnPeakB, mOffPeakB , mMidPeakB);
    }).catch(error => {
      console.log(error);
    });
    axios.get('http://localhost:8080//cacheDB/yearlyBulbUse.JSON')
    .then(response => {
    yOnPeakB = response.data.recordset[0].onPk;
    yOffPeakB = response.data.recordset[0].offPk;
    yMidPeakB = response.data.recordset[0].midPk;
    resolve(yOnPeakB, yOffPeakB , yMidPeakB);
    console.log(yOnPeakB, yOffPeakB , yMidPeakB);

    weeklyFan = wOnPeakF * on_peak + wOffPeakF * off_peak + wMidPeakF * mid_peak;
    weeklyFridge = wOnPeakFr * on_peak + wOffPeakFr * off_peak + wMidPeakFr *mid_peak;
    weeklyBulb = wOnPeakB * on_peak + wOffPeakB * off_peak + wMidPeakB * mid_peak;

    monthlyFan =  mOnPeakF * on_peak + mOffPeakF * off_peak + mMidPeakF * mid_peak;
    monthlyFridge = mOnPeakFr * on_peak + mOffPeakFr * off_peak + mMidPeakFr *mid_peak;
    monthlyBulb = mOnPeakB * on_peak + mOffPeakB * off_peak + mMidPeakB * mid_peak;

    yearlyFan = yOnPeakF * on_peak + yOffPeakF * off_peak + yMidPeakF * mid_peak;

    yearlyFridge =  yOnPeakFr * on_peak + yOffPeakFr * off_peak + yMidPeakFr* mid_peak;
    yearlyBulb =  yOnPeakB * on_peak + yOffPeakB * off_peak + yMidPeakB * mid_peak ;
    // these too
    weeklyCost = weeklyFan + weeklyFridge + weeklyBulb;
    monthlyCost = monthlyFan + monthlyFridge + monthlyBulb;
    yearlyCost = yearlyFan + yearlyFridge + yearlyBulb;

    console.log("cant be NAN" + weeklyCost, monthlyCost, yearlyCost,
    weeklyFan, weeklyFridge, weeklyBulb,
     monthlyFan, monthlyFridge, monthlyBulb,
     yearlyFan, yearlyFridge, yearlyBulb);


     var calcCosts = {
      name: "Newbie Co.",
      order_count: 0,
      address: "Po Box City",
    }
      var calcCosts = JSON.stringify(
        [{ weeklyCost: Number(weeklyCost) },
        { monthlyCost: Number(monthlyCost) },
        { yearlyCost: Number(yearlyCost) }]
      );
      fs.writeFile('./../../../public/cacheDB/estCosts.JSON', calcCosts, written);
      console.log(calcCosts);
      console.log('CalcCost File write complete');
      function written(err){
      console.log(err);
      }

  //   const customer = {
  //   name: "Newbie Co.",
  //   order_count: 0,
  //   address: "Po Box City",
  //   }
  //   const jsonString = JSON.stringify(customer)fs.writeFile('./../../../public/cacheDB/estCosts.JSON', jsonString, written)
  //   function written(err){
  //   if (err) {
  //       console.log('Error writing file', err)
  //   } else {
  //       console.log('Successfully wrote file')
  //   }
  // })

    }).catch(error => {
      console.log(error);
    });

  });
  }

  function forAsync(){
    return new Promise(function (resolve) {
    // weeklyFan = wOnPeakF * on_peak + wOffPeakF * off_peak + wMidPeakF * mid_peak;
    // weeklyFridge = wOnPeakFr * on_peak + wOffPeakFr * off_peak + wMidPeakFr *mid_peak;
    // weeklyBulb = wOnPeakB * on_peak + wOffPeakB * off_peak + wMidPeakB * mid_peak;
    //
    // monthlyFan =  mOnPeakF * on_peak + mOffPeakF * off_peak + mMidPeakF * mid_peak;
    // monthlyFridge = mOnPeakFr * on_peak + mOffPeakFr * off_peak + mMidPeakFr *mid_peak;
    // monthlyBulb = mOnPeakB * on_peak + mOffPeakB * off_peak + mMidPeakB * mid_peak;
    //
    // yearlyFan = yOnPeakF * on_peak + yOffPeakF * off_peak + yMidPeakF * mid_peak;
    //
    // yearlyFridge =  yOnPeakFr * on_peak + yOffPeakFr * off_peak + yMidPeakFr* mid_peak;
    // yearlyBulb =  yOnPeakB * on_peak + yOffPeakB * off_peak + yMidPeakB * mid_peak ;
    yearlyFridge=yearlyFridge;
    resolve(yearlyFridge);
    console.log("yrFr" + yearlyFridge);
  });
}

  async function main() {
      var result = await makeGetRequest();
      // console.log("I waited.");
      var res2 = await forAsync();

  // weeklyCost = weeklyFan + weeklyFridge + weeklyBulb;
  // monthlyCost = monthlyFan + monthlyFridge + monthlyBulb;
  // yearlyCost = yearlyFan + yearlyFridge + yearlyBulb;

  // For annual estimated cost accordion portion use yearlyFan, yearlyFridge & yearlyBulb;
  // weeklyCost=
  // monthlyCost=
  // yearlyCost=
  // monthlyFan=
  // monthlyFridge=
  // monthlyBulb=
  // console.log("cant be NAN" + weeklyCost,monthlyCost, yearlyCost, monthlyFan,monthlyFridge,monthlyBulb);
 // console.log("WHyy these" + mOnPeakFr, mOffPeakFr, mMidPeakFr);
 // console.log("apparently these are fine" + weeklyFan , weeklyFridge, weeklyBulb);
// console.log("apparently these within these are fine" + wOnPeakF , wOffPeakF, wMidPeakF);

  }
  main();
