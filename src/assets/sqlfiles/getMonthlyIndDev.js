var startW = new Date();
const sql = require('mssql');
var fs = require('fs');

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

monthlyBulbData();
monthlyFridgeData();
monthlyFanData();

function monthlyBulbData() {
    try {
        sql.connect(config)
            .then(function () {
                new sql.Request()
                    .query("SELECT TOP 2 * FROM monthlyBulbUse ORDER BY month_ID DESC")
                    .then(function (dbData) {
                        if (dbData == null || dbData.length === 0)
                            return;
                        var dataw = JSON.stringify(dbData, null, 1);
                        fs.writeFile('./../../../public/cacheDB/monthlyBulbUse.JSON', dataw, written);
                        var timeW = new Date() - startW;
                        var msg ="getMonthlyIndDev.js p1 " + timeW;
                        fs.writeFile('./helpers/dataFetchTimes.JSON', msg, {'flag':'a'}, written);
                        function written(err){
                          console.log('Monthly File write complete');
                          console.log("Time to execute: " + timeW +"ms");
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

function monthlyFridgeData() {
    try {
        sql.connect(config)
            .then(function () {
                new sql.Request()
                    .query("SELECT TOP 2 * FROM monthlyFridgeUse ORDER BY month_ID DESC")
                    .then(function (dbData) {
                        if (dbData == null || dbData.length === 0)
                            return;
                        var dataw = JSON.stringify(dbData, null, 1);
                        fs.writeFile('./../../../public/cacheDB/monthlyFridgeUse.JSON', dataw, written);
                        var timeW = new Date() - startW;
                        var msg ="getMonthlyIndDev.js p2 " + timeW;
                        fs.writeFile('./helpers/dataFetchTimes.JSON', msg, {'flag':'a'}, written);
                        function written(err){
                          console.log('Monthly File write complete');
                          console.log("Time to execute: " + timeW +"ms");
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

function monthlyFanData() {
    try {
        sql.connect(config)
            .then(function () {
                new sql.Request()
                    .query("SELECT TOP 2 * FROM monthlyFanUse ORDER BY month_ID DESC")
                    .then(function (dbData) {
                        if (dbData == null || dbData.length === 0)
                            return;
                        var dataw = JSON.stringify(dbData, null, 1);
                        fs.writeFile('./../../../public/cacheDB/monthlyFanUse.JSON', dataw, written);
                        var timeW = new Date() - startW;
                        var msg ="getMonthlyIndDev.js p3 " + timeW;
                        fs.writeFile('./helpers/dataFetchTimes.JSON', msg, {'flag':'a'}, written);
                        function written(err){
                          console.log('Monthly File write complete');
                          console.log("Time to execute: " + timeW +"ms");
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
module.exports = monthlyBulbData;
