var mysql = require('mysql');
var express = require('express');
var app = express();
app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mydb"
});

app.get('/public/home.html', function (req, res) {
  var sql = "SELECT * FROM tasks";
  con.query(sql, function(err, results) {
    if (err) throw err;
    res.send(results);
  });
});
