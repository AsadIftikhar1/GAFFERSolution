const express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var app=express();  //init app
var session=require('express-session');
var expressValidator=require('express-validator');
var mustacheExpress=require('mustache-express');
var Sequelize=require('sequelize');
var request = require('request');
const ejsLint = require('ejs-lint');
var mkdirp = require('mkdirp');
var fileUpload=require('express-fileupload');
var models=require('./models');



// const sef = sequelize-express-findbyid (model[, primaryKey = 'id'])

//var models=require('./models');



// import models from './models';

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

//Get Page model for THE CLIENT SIDE
var Page = require('./models/page');

//Get All Pages to Pass to Header.ejs
        models.Page.findAll({
        order: [
            ['sorting', 'DESC']
        ],
      }).then(function(pages){
        // res.render('admin/pages',{
        //     pages:pages
        app.locals.pages=pages;
        //It contains the Part when my Project was updated 
        //and it does not show when its Updated its what 
        //req.app.local.pages Do For in order to Show them 
        //the Pages you have Just Updated you have To RESTART your Server 
        
      }).catch(function(err){
        console.log(err);
      });


  // GET Category Model
var Category = require('./models/category');
      
//Get All Categories to Pass to Header.ejs
models.Category.findAll({
  
}).then(function(categories){
  // res.render('admin/pages',{
  //     pages:pages
  app.locals.categories=categories;
 
}).catch(function(err){
  console.log(err);
});

//Express FileUplaod MIddleware
app.use(fileUpload());


//Body parser Middleware
//
//Parse application
app.use(bodyParser.urlencoded({extended:false}));
//Parse application/json
app.use(bodyParser.json());

//Express Session Middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,                //It was not abling to send flash messages because it uses session thats why ture
  saveUninitialized: true,
  // cookie: { secure: true }
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
    },
    customValidators:{
      isImage: function(value,filename){
      var extension=(path.extname(filename)).toLowerCase();
      switch(extension){
        case '.jpg':
        return '.jpg';
        case '.jpeg':
        return '.jpeg';
        case '.png':
        return '.png';
        case ' ':
        return '.jpg';
        default:
        return false;
      }
      }
    }
}));
// Babel PLUGIn for Gallery Error

 
// var result = babel.transform(input, {
//   plugins: [
//     [ staticFs, {
//       onFile: onFile
//     } ]
//   ],
//   filename: filename
// });
 
// function onFile (file) {
//   console.log('Discovered new dependency:', file);
// }
//Express messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

var sequelize=new Sequelize('gaffercart','root',null,{

    host:'localhost',
    dialect:'mysql',

    pool:{
      idle: 30000,
   min: 20,
   max: 30

},
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = sequelize;

var debug = require('debug')('init:server');
var http = require('http');




var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);



function normalizePort(val) { /* ... */ }
function onError(error) { /* ... */ }
function onListening() { /* ... */ }

//Set Routes
var pages=require('./routes/pages.js');
var products=require('./routes/products.js');
var adminPages=require('./routes/admin_pages.js');
var adminCategories=require('./routes/admin_categories.js');
var adminProducts=require('./routes/admin_products.js');


app.use('/admin/pages',adminPages);
app.use('/admin/categories',adminCategories);
app.use('/admin/products',adminProducts);
app.use('/products',products); //for Displaying all of the PRODUCTS
app.use('/',pages);


//Start the server
var port=3000;
app.listen('3000',()=>{
  console.log('server started on port 3000');
});




module.exports=sequelize;