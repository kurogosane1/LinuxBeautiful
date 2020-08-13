const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mein@wesome1",
  database: "main2",
});

module.exports = connection;
