const axios = require('axios');

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

axios.get('http://localhost:8080//cacheDB/weeklyFanUse.JSON')
    .then(response => {
    this.wOnPeakF = response.data.recordset[0].onPk;
    this.wOffPeakF = response.data.recordset[0].offPk;
    this.wMidPeakF = response.data.recordset[0].midPk;
    }).catch(error => {
      console.log(error);
    });

    axios.get('http://localhost:8080//cacheDB/monthlyFanUse.JSON')
    .then(response => {
    this.mOnPeakF = response.data.recordset[0].onPk;
    this.mOffPeakF = response.data.recordset[0].offPk;
    this.mMidPeakF = response.data.recordset[0].midPk;
    }).catch(error => {
      console.log(error);
    });
    axios.get('http://localhost:8080//cacheDB/yearlyFanUse.JSON')
    .then(response => {
    this.yOnPeakF = response.data.recordset[0].onPk;
    this.yOffPeakF = response.data.recordset[0].offPk;
    this.yMidPeakF = response.data.recordset[0].midPk;
    }).catch(error => {
      console.log(error);
    });


    axios.get('http://localhost:8080//cacheDB/weeklyFridgeUse.JSON')
    .then(response => {
    this.wOnPeakFr = response.data.recordset[0].onPk;
    this.wOffPeakFr = response.data.recordset[0].offPk;
    this.wMidPeakFr = response.data.recordset[0].midPk;
    }).catch(error => {
      console.log(error);
    });
    axios.get('http://localhost:8080//cacheDB/monthlyFridgeUse.JSON')
    .then(response => {
    this.mOnPeakFr = response.data.recordset[0].onPk;
    this.mOffPeakFr = response.data.recordset[0].offPk;
    this.mMidPeakFr = response.data.recordset[0].midPk;
    }).catch(error => {
      console.log(error);
    });
    axios.get('http://localhost:8080//cacheDB/yearlyFridgeUse.JSON')
    .then(response => {
    this.yOnPeakFr = response.data.recordset[0].onPk;
    this.yOffPeakFr = response.data.recordset[0].offPk;
    this.yMidPeakFr = response.data.recordset[0].midPk;
    }).catch(error => {
      console.log(error);
    });


    axios.get('http://localhost:8080//cacheDB/weeklyBulbUse.JSON')
    .then(response => {
    this.wOnPeakB = response.data.recordset[0].onPk;
    this.wOffPeakB = response.data.recordset[0].offPk;
    this.wMidPeakB = response.data.recordset[0].midPk;
    console.log("wOnPeakB: " + wOnPeakB, wOffPeakB, wMidPeakB);
    }).catch(error => {
      console.log(error);
    });
    axios.get('http://localhost:8080//cacheDB/monthlyBulbUse.JSON')
    .then(response => {
    this.mOnPeakB = response.data.recordset[0].onPk;
    this.mOffPeakB = response.data.recordset[0].offPk;
    this.mMidPeakB = response.data.recordset[0].midPk;
    }).catch(error => {
      console.log(error);
    });
    axios.get('http://localhost:8080//cacheDB/yearlyBulbUse.JSON')
    .then(response => {
    this.yOnPeakB = response.data.recordset[0].onPk;
    this.yOffPeakB = response.data.recordset[0].offPk;
    this.yMidPeakB = response.data.recordset[0].midPk;
    }).catch(error => {
      console.log(error);
    });

  var weeklyFan = wOnPeakF * on_peak + wOffPeakF * off_peak + wMidPeakF * mid_peak;
  var weeklyFridge = wOnPeakFr * on_peak + wOffPeakFr * off_peak + wMidPeakFr *mid_peak;
  var weeklyBulb = wOnPeakB * on_peak + wOffPeakB * off_peak + wMidPeakB * mid_peak;

  var monthlyFan =  mOnPeakF * on_peak + mOffPeakF * off_peak + mMidPeakF * mid_peak;
  var monthlyFridge = mOnPeakFr * on_peak + mOffPeakFr * off_peak + mMidPeakFr *mid_peak;
  var monthlyBulb = mOnPeakB * on_peak + mOffPeakB * off_peak + mMidPeakB * mid_peak;

  var yearlyFan = yOnPeakF * on_peak + yOffPeakF * off_peak + yMidPeakF * mid_peak;

  var yearlyFridge =  yOnPeakFr * on_peak + yOffPeakFr * off_peak + yMidPeakFr* mid_peak;
  var yearlyBulb =  yOnPeakB * on_peak + yOffPeakB * off_peak + yMidPeakB * mid_peak ;

  var  weeklyCost = weeklyFan + weeklyFridge + weeklyBulb;
  var monthlyCost = monthlyFan + monthlyFridge + monthlyBulb;
  var yearlyCost = yearlyFan + yearlyFridge + yearlyBulb;
  // For annual estimated cost accordion portion use yearlyFan, yearlyFridge & yearlyBulb;
  console.log(weeklyCost,monthlyCost, yearlyCost)
