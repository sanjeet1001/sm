var express = require('express');
var http = require('http');
var cors = require('cors');
var bodyParser = require('body-parser');
 // var Request = require('tedious').Request;  
 //   var TYPES = require('tedious').TYPES; 


 /* var Connection = require('tedious').Connection;  
    var config = {  
        userName: 'sanjeet',  
        password: '@Aa12345',  
        server: 'sanjeettodo.database.windows.net',  
        // If you are on Microsoft Azure, you need this:  
        options: {encrypt: true, database: 'todo'}  
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
    // If no error, then good to proceed.  
        console.log("Connected");  
    }); 
*/
/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'sanjeettodo.database.windows.net',
  user     : 'sanjeet',
  password : '@Aa12345',
  database : 'todo'
});

connection.connect();
*/






var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


var sql = require('mssql');

var config = {
    user: 'sanjeet',
    password: '@Aa12345',
    server: 'sanjeettodo.database.windows.net',
    database: 'todo',

    options: {
        encrypt: true
    }
}






app.use(cors());
var result = "";  
var sanjeet = {
  name : 'sanjeet'
};
app.get('/about',function(req,res){
  sql.connect(config).then(function() {
    // Query

    new sql.Request()
    .query('select * from battles').then(function(recordset) {
        res.json(recordset);
    }).catch(function(err) {
        res.send(err);
    });
}).catch(function(err) {
    res.send(err);
});
});
app.get('/postm',function(req,res){
  console.log('postra');
});
app.get('/putm',function(req,res){
  console.log('putra');
});
app.use(express.static(__dirname+'/app'));


app.listen(process.env.PORT ||7878,function(req,res){
    console.log('server started');
})
