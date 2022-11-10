const mysql = require("mysql");

// Create a connection to the database
const sqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'CBO',
  });

  sqlConnection.connect((err)=> {
  if(!err)
  console.log('Connected Successfully');
  else
  console.log('Connection Failed!');
  });

module.exports = sqlConnection;