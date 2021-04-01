const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);  
} 
//add password and database//
else { 
  connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "",
    database: ""
    });
  };

  connection.connect(function(err) {
    if (err) throw err;
      console.log("connected as id " + connection.threadId + "\n");
  });

  module.exports = connection;