var getDataWeekly = require('./getWeekly.js'),
    getDataMonthly = require('./getMonthly.js'),
    getDataYearly = require('./getYearly.js');;
var fs = require('fs');
// const {performance} = require('perf_hooks');

getDataWeekly();
getDataMonthly();
getDataYearly();

// var startGetTrendData = new Date();
// var startGetTrendData = performance.now();
// startFetchData().then(() =>{
//   // var timeGetTrendData = new Date() - startGetTrendData;
//   // var timeGetTrendData = performance.now() - startGetTrendData;
//   // var msg ="\ngetTrendData.js includes{getMonthly, getWeekly, getYearly} " + timeGetTrendData;
//   // fs.writeFile('./helpers/dataFetchTimes.JSON', msg, {'flag':'a'}, written);
//   function written(err){
//     console.log("Time GetTrendData complete ");
//   }
// });
// async function startFetchData(){
//   try {
//
//   return;
// } catch (error) {
//     console.dir(error);
// }
// }

// async function fetchData(){
//   try {
//   await startFetchData();
// } catch (error) {
//     console.dir(error);
// }
// }
