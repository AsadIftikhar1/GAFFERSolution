const express=require('express');
var path=require('path');
var app=express();  //init app
var bodyParser=require('body-parser');
var session=require('express-session');
var expressValidator=require('express-validator');



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

const mysql=require('mysql');

// Create connection
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''

});
//connection
db.connect((err)=>{
    if(err){
      throw err;
    }
    console.log('mySQl connected');
});

//Create debug
app.get('/createdb',(req,res)=>{
  let sql='CREATE DATABASE gaffercart';
  db.query(sql,(err,result)=>{
    if(err) throw err;
    console.log('result');
    res.send('database created');
  });
});
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
