var startY = new Date();
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
var startY = performance.now();
// UNCOMMENT TO TEST ONLY THIS FILE
// getDataYearly();

async function getDataYearly() {
    try {
        sql.connect(config)
            .then(function () {
                new sql.Request()
                    // .query("select * from Smart_Devices")
                    .query("SELECT * FROM Yearly_usage")
                    // .query("select * from Yearly_usage")
                    .then(function (dbData) {
                        if (dbData == null || dbData.length === 0)
                            return;
                        // console.dir('All the Data');
                        // console.log(dbData);
                        var dataw = JSON.stringify(dbData, null, 1);
                        fs.writeFile('./../../../public/cacheDB/yearlyUsage.JSON', dataw, written);
                        var time = performance.now() - startY;
                        var msg ="\ngetYearly.js " + time;
                        fs.writeFile('./helpers/dataFetchTimes.JSON', msg, {'flag':'a'}, written);
                        function written(err){
                          console.log('Yearly File write complete');
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
module.exports = getDataYearly;
