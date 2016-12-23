var mysql = require('mysql');
// Create connection pool
var pool = mysql.createPool({
    host: 'localhost',
    user: 'pengli',
    password: '654321',
    database: 'ironhack',
    port: 3306
});
// values is an array for sql.
// callback is a callback function define when function query is called.
exports.query = function (sql, values, callback) {
  pool.getConnection(function (err, connection) {
    connection.query(sql, values, function(err ,rows) {
      if (err) console.log(err);
      callback.apply(null, arguments);
      connection.release();
    });
  });
};
