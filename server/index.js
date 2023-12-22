const mysql = require("mysql");

const db = mysql.createConnection({
  host: "sandbox-1.cowdxaotesut.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "password", //  need to create a new password & encrypt this with environmnement variable
  database: "-",
});

db.connect((err) => {});
