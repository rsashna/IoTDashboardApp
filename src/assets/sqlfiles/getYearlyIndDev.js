var startW = new Date();
const sql = require('mssql');
var fs = require('fs');

const config = {
    user: 'adminhome',
    password: 'home123#',
    server: 'homecloudcapstone.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
    database: 'smart_home_cloud_database',
    "options": {
        "encrypt": true,
        "enableArithAbort": true
    }
};

yearlyBulbData();
yearlyFridgeData();
yearlyFanData();

function yearlyBulbData() {
    try {
        sql.connect(config)
            .then(function () {
                new sql.Request()
                    .query("SELECT TOP 2 * FROM yearlyBulbUse ORDER BY year_ID DESC")
                    .then(function (dbData) {
                        if (dbData == null || dbData.length === 0)
                            return;
                        var dataw = JSON.stringify(dbData, null, 1);
                        fs.writeFile('./../../../public/cacheDB/yearlyBulbUse.JSON', dataw, written);
                        var timeW = new Date() - startW;
                        var msg ="getYearlyIndDev.js p1 " + timeW;
                        fs.writeFile('./helpers/dataFetchTimes.JSON', msg, {'flag':'a'}, written);
                        function written(err){
                          console.log('Yearly File write complete');
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

function yearlyFridgeData() {
    try {
        sql.connect(config)
            .then(function () {
                new sql.Request()
                    .query("SELECT TOP 2 * FROM yearlyFridgeUse ORDER BY year_ID DESC")
                    .then(function (dbData) {
                        if (dbData == null || dbData.length === 0)
                            return;
                        var dataw = JSON.stringify(dbData, null, 1);
                        fs.writeFile('./../../../public/cacheDB/yearlyFridgeUse.JSON', dataw, written);
                        var timeW = new Date() - startW;
                        var msg ="getYearlyIndDev.js p2 " + timeW;
                        fs.writeFile('./helpers/dataFetchTimes.JSON', msg, {'flag':'a'}, written);
                        function written(err){
                          console.log('Yearly File write complete');
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

function yearlyFanData() {
    try {
        sql.connect(config)
            .then(function () {
                new sql.Request()
                    .query("SELECT TOP 2 * FROM yearlyFanUse ORDER BY year_ID DESC")
                    .then(function (dbData) {
                        if (dbData == null || dbData.length === 0)
                            return;
                        var dataw = JSON.stringify(dbData, null, 1);
                        fs.writeFile('./../../../public/cacheDB/yearlyFanUse.JSON', dataw, written);
                        var timeW = new Date() - startW;
                        var msg ="getYearlyIndDev.js p3 " + timeW;
                        fs.writeFile('./helpers/dataFetchTimes.JSON', msg, {'flag':'a'}, written);
                        function written(err){
                          console.log('Yearly File write complete');
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
module.exports = yearlyBulbData;
