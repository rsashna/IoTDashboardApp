const sql = require('mssql');

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
                    .query("select * from Weekly_usage")
                    // .query("select * from Yearly_usage")
                    .then(function (dbData) {
                        if (dbData == null || dbData.length === 0)
                            return;
                        console.dir('All the Data');
                        console.dir(dbData);
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
