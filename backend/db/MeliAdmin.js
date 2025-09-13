const mysql = require("mysql");

const MeliAdminDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "meliadmin_db",
});

module.exports = MeliAdminDB;
