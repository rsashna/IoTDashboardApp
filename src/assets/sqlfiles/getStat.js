const sql = require('mssql');

var fs = require('fs');
fs.open('./../storedJSONs/devicestat.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

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

getData();

function getData() {
    try {
        sql.connect(config)
            .then(function () {
                new sql.Request()
                    .query("SELECT device_status FROM Smart_Devices")
                    .then(function (dbData) {
                        if (dbData == null || dbData.length === 0)
                            return;
                        console.dir('All the Data');
                        console.dir(dbData);
                        // body = dbData.stringify;
                        // var myJSONdata = body.split("=")[1];
                        // fs.writeFile('./../storedJSONs/devicestat.txt', dbData.stringify, function (err) {
                        if (err) throw err;
                        console.log('Saved!');
                      });
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
