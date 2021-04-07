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

getDataWeekly();

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
                        console.dir('All the Data');
                        console.log(dbData);
                        var dataw = JSON.stringify(dbData, null, 1);
                        fs.writeFile('./../../../public/cacheDB/weeklyUsage.JSON', dataw, written);
                        function written(err){
                          console.log('Weekly File write complete');
                          var timeW = new Date() - startW;
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
module.exports = getDataWeekly;
