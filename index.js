const express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var app=express();  //init app
var session=require('express-session');
var expressValidator=require('express-validator');
var mustacheExpress=require('mustache-express');
var Sequelize=require('sequelize');



//Setting Mustache of Express for CRUD functionalities
app.engine('mustache',mustacheExpress());
app.set('view engine','mustache');



//var config=require('./config/database');

//View Engine Setup

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
//Set public folder
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(__dirname + '/public'));


//Set Global Errors value
app.locals.errors=null;

//Body parser Middleware
//
//Parse application
app.use(bodyParser.urlencoded({extended:false}));
//Parse application/json
app.use(bodyParser.json());

//Express Session Middleware
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
//Validator Middleware
app.use(expressValidator({
    errorFormatter:function(param,msg,value){
      var namespace=param.split('.')
      ,root=namespace.shift()
      ,formParam=root;

      while(namespace.length){
        formParam+='['+namespace.shift()+']';
      }
      return{
        param:formParam,
        msg:msg,
        value:value
      };
    }
}));
//Express messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// const mysql=require('mysql');
//
// const Sequelize = require('sequelize');
// Create connection
var sequelize=new Sequelize('gaffercart','root',null,{

    host:'localhost',
    dialect:'mysql',

    pool:{
      idle: 30000,
   min: 20,
   max: 30

},
});

// Page = sequelize.define('page',{
//     username: { type: sequelize.STRING },
//     balance: { type: sequelize.INTEGER },
//     title:{type: sequelize.STRING},
//     slug:{type: sequelize.STRING},
//     content:{type: sequelize.STRING},
//     sorting:{type: sequelize.INTEGER}
// });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

var debug = require('debug')('init:server');
var http = require('http');


var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);



function normalizePort(val) { /* ... */ }
function onError(error) { /* ... */ }
function onListening() { /* ... */ }



//
// //connection
// db.connect((err)=>{
//     if(err){
//       throw err;
//     }
//     console.log('mySQl connected');
// });
//
// //Create debug
// app.get('/createdb',(req,res)=>{
//   let sql='CREATE DATABASE gaffercart';
//   db.query(sql,(err,result)=>{
//     if(err) throw err;
//     console.log('result');
//     res.send('database created');
//   });
// });
//Set Routes
var pages=require('./routes/pages.js');
var adminPages=require('./routes/admin_pages.js');

app.use('/admin/pages',adminPages);
app.use('/',pages);

//Start the server
var port=3000;
app.listen('3000',()=>{
  console.log('server started on port 3000');
});
