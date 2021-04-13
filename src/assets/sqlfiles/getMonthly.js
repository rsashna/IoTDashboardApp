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
var startM = performance.now();
// UNCOMMENT TO TEST ONLY THIS FILE
// getDataMonthly();

async function getDataMonthly() {
    try {
        sql.connect(config)
            .then(function () {
                new sql.Request()
                    // .query("select * from Smart_Devices")
                    .query("SELECT * FROM Monthly_usage")
                    // .query("select * from Yearly_usage")
                    .then(function (dbData) {
                        if (dbData == null || dbData.length === 0)
                            return;
                        // console.dir('All the Data');
                        // console.log(dbData);
                        var dataw = JSON.stringify(dbData, null, 1);
                        fs.writeFile('./../../../public/cacheDB/monthlyUsage.JSON', dataw, written);
                        var timeM = performance.now() - startM;
                        var msg ="\ngetMonthly.js " + timeM;
                        fs.writeFile('./helpers/dataFetchTimes.JSON', msg, {'flag':'a'}, written);
                        function written(err){
                          console.log('Monthly File write complete');
                          console.log("Time to execute: " + msg +"ms");
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
module.exports = getDataMonthly;
