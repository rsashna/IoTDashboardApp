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

weeklyBulbData();
weeklyFridgeData();
weeklyFanData();

function weeklyBulbData() {
    try {
        sql.connect(config)
            .then(function () {
                new sql.Request()
                    .query("SELECT TOP 2 * FROM weeklyBulbUse ORDER BY week_ID DESC")
                    .then(function (dbData) {
                        if (dbData == null || dbData.length === 0)
                            return;
                        var dataw = JSON.stringify(dbData, null, 1);
                        fs.writeFile('./../../../public/cacheDB/weeklyBulbUse.JSON', dataw, written);
                        var timeW = new Date() - startW;
                        var msg ="getWeeklyIndDev.js p1 " + timeW;
                        fs.writeFile('./helpers/dataFetchTimes.JSON', msg, {'flag':'a'}, written);
                        function written(err){
                          console.log('Weekly File write complete');
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

function weeklyFridgeData() {
    try {
        sql.connect(config)
            .then(function () {
                new sql.Request()
                    .query("SELECT TOP 2 * FROM weeklyFridgeUse ORDER BY week_ID DESC")
                    .then(function (dbData) {
                        if (dbData == null || dbData.length === 0)
                            return;
                        var dataw = JSON.stringify(dbData, null, 1);
                        fs.writeFile('./../../../public/cacheDB/weeklyFridgeUse.JSON', dataw, written);
                        var timeW = new Date() - startW;
                        var msg ="getWeeklyIndDev.js p2 " + timeW;
                        fs.writeFile('./helpers/dataFetchTimes.JSON', msg, {'flag':'a'}, written);
                        function written(err){
                          console.log('Weekly File write complete');
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

function weeklyFanData() {
    try {
        sql.connect(config)
            .then(function () {
                new sql.Request()
                    .query("SELECT TOP 2 * FROM weeklyFanUse ORDER BY week_ID DESC")
                    .then(function (dbData) {
                        if (dbData == null || dbData.length === 0)
                            return;
                        var dataw = JSON.stringify(dbData, null, 1);
                        fs.writeFile('./../../../public/cacheDB/weeklyFanUse.JSON', dataw, written);
                        var timeW = new Date() - startW;
                        var msg ="getWeeklyIndDev.js p3 " + timeW;
                        fs.writeFile('./helpers/dataFetchTimes.JSON', msg, {'flag':'a'}, written);
                        function written(err){
                          console.log('Weekly File write complete');
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
module.exports = weeklyBulbData;
