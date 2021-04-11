var getDataWeekly = require('./getWeekly.js'),
    getDataMonthly = require('./getMonthly.js'),
    getDataYearly = require('./getYearly.js');;


var startGetTrendData = new Date();

async function startFetchData(){
  await getDataWeekly()
  await getDataMonthly()
  await getDataYearly()
}

async function fetchData(){
  await startFetchData()
  var timeGetTrendData = new Date() - startGetTrendData;
  console.log("Time GetTrendData: " + timeGetTrendData +" ms");
}
