var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "bamazon",
    database: "bamazon",
    port: 3306
  });
  

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected. Seeding now...");
  var sql = "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('PS4', 'Electronics', '199', 22)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });


  sql = "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('PS4', 'Electronics', '199', 22)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  sql = "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('PS4', 'Electronics', '199', 22)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });


  sql = "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('PS4', 'Electronics', '199', 22)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });


  sql = "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('PS4', 'Electronics', '199', 22)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });


  sql = "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('PS4', 'Electronics', '199', 22)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });


  sql = "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('PS4', 'Electronics', '199', 22)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  sql = "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('PS4', 'Electronics', '199', 22)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });


  sql = "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('PS4', 'Electronics', '199', 22)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  

  sql = "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('PS4', 'Electronics', '199', 22)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});