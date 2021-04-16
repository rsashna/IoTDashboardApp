var startW = new Date();
const sql = require('mssql');
var fs = require('fs');
const {performance} = require('perf_hooks');
const config = {
    user: 'adminhome',
    password: 'home123#',
    server: 'homecloudcapstone2.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
    database: 'smart_home_cloud_database',
    "options": {
        "encrypt": true,
        "enableArithAbort": true
    }
};
var startW = performance.now();
// UNCOMMENT TO TEST ONLY THIS FILE
// getDataWeekly();

function getDataWeekly() {
    try {
        sql.connect(config)
            .then(function () {
                new sql.Request()
                    // .query("select * from Smart_Devices")
                    .query("SELECT jsonData FROM Weekly_usage")
                    // .query("select * from Yearly_usage")
                    .then(function (dbData) {
                        if (dbData == null || dbData.length === 0)
                            return;
                        // console.dir('All the Data');
                        // console.log(dbData);
                        var dataw = JSON.stringify(dbData, null, 1);
                        fs.writeFile('./../../../public/cacheDB/weeklyUsage.JSON', dataw, written);
                        var time = performance.now() - startW;
                        var msg ="\ngetWeekly.js " + time;
                        fs.writeFile('./helpers/dataFetchTimes.JSON', msg, {'flag':'a'}, written);
                        function written(err){
                          console.log('Weekly File write complete');
                          console.log("Time to execute: " + time +"ms");
                          return;
                        }
                    })
                    .catch(function (error) {
                        console.dir(error);
                    });

            }).catch(function (error) {
                console.dir(error);
            });
    } catch (error) {
        console.dir(error);
    }
}
module.exports = getDataWeekly;
