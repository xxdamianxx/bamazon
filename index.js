var http = require("http");
var mysql = require('mysql');

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);


var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "bamazon",
    database: "bamazon",
    insecureAuth : true
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL!");
  });

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');