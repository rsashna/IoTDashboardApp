var start = new Date();
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

getDataStatus();

async function getDataStatus() {
    try {
        sql.connect(config)
            .then(function () {
                new sql.Request()
                    .query("select * from Smart_Devices")
                    .then(function (dbData) {
                        if (dbData == null || dbData.length === 0)
                            return;
                        console.dir('All the Data');
                        console.log(dbData);
                        var dataw = JSON.stringify(dbData, null, 1);
                        fs.writeFile('./../../../public/cacheDB/deviceStatus.JSON', dataw, written);
                        function written(err){
                          console.log('Device Status File write complete');
                          var time = new Date() - start;
                          console.log("Time to execute: " + time +"ms");
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
// module.exports = getDataStatus;
