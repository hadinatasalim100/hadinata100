var pool = require('./databaseConfig.js');
var beasiswaDB = {
    getAppBeasiswa: function (nim, callback) {
    pool.getConnection(function (err, conn) {
    if (err) {
        console.log(err);
        return callback(err, null);
    } else {
        console.log("Connected!");
        var sql = 'SELECT * FROM pengajuanbeasiswa where nim = ?';
        conn.query(sql, [nim], function (err, result) {
        conn.release();
            if (err) {
                console.log(err);
                return callback(err, null);
            } else {
                console.log(result);
                return callback(null, result);
            }
        });
    }
});
}
};
module.exports = beasiswaDB