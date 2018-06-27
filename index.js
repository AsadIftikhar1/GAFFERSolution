const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
var session=require('express-session');
var expressValidator=require('express-validator');
var mustacheExpress=require('mustache-express');
var Sequelize=require('sequelize');
var request = require('request');
const ejsLint = require('ejs-lint');
var mkdirp = require('mkdirp');
var fileUpload=require('express-fileupload');
var models=require('./models');
var passport=require('passport');
var cors=require('cors');
var env = require('dotenv').load();
var bCrypt=require('bcrypt-nodejs');
var router = express.Router();
const exphbs=require('express-handlebars');
const xoauth2=require('xoauth2');
const paypal=require('paypal-rest-sdk');
// var config=JSON.parse(fs.readFileSync("config.json"));


paypal.configure({
  'mode':'sandbox',
  'client_id':'AQ6-iukrxSP8vM0XuXHQUxT4v0Cz3sC51O3Ozt-tTvtll3qil1-YrcGUm0oofRNMCsIeqshJ_456of-I',
  'client_secret':'ENmK2eH-rvKztpj0E54-xk-7YKP37UoKQUT8reSkbHsOlh759qbMO80gqGqO3O3orbZ-6-x2_i1nYTiL'
})

const nodemailer=require('nodemailer');

var app=express();  //init app

// app.engine('handlebars',exphbs());
// app.set('view engine','handlebars');



//For Cross Origins and for Saving cookies
app.use(cors({
  origin:['http://localhost:4200','http://127.0.0.1:4200'],
  credentials:true
}))

//Setting Mustache of Express for CRUD functionalities
app.engine('mustache',mustacheExpress());
app.set('view engine','mustache');

//View Engine Setup

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

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
app.use(bodyParser.urlencoded({extended:true}));
//Parse application/json
app.use(bodyParser.json());

//Express Session Middleware
app.use(session({
  name:'GafferCart',
  secret: 'Gaffer',
  // resave: true,                //It was not abling to send flash messages because it uses session thats why ture
  saveUninitialized: true,
  cookie: { 
    maxAge:3600000,
    httpOnly:false,
    secure: false
  }
}));

app.get('/',(req,res)=>{
  res.render('contact');
  })
  
  
  app.post('/send',(req, res)=> {
    const output=`
    <p style="width:100%; height:80px; background-color:#800000;"><font style="margin-left:300px; color:#FFEBCD; font-size:54px;"><b>Gaffer Cart<b></font></p>
    <h3>Contact Details</h3>
    <ul style="list-style-type:none;">
    <li style="width:80%; height:auto; background-color:#FFEBCD; padding-left:15px; padding-top:5px;">Name:${req.body.name}</li>
    <li style="width:80%; height:auto; background-color:#FFEBCD; padding-left:15px; padding-top:5px;">Company:${req.body.company}</li>
    <li style="width:80%; height:auto; background-color:#FFEBCD; padding-left:15px; padding-top:5px;">Email:${req.body.email}</li>
    <li style="width:80%; height:auto; background-color:#FFEBCD; padding-left:15px; padding-top:5px;">Phone:${req.body.phone}</li>
    </ul>
    <h3 style="width:80%; height:40px; background-color:lightgreen; margin-left:80px; padding-left:15px; padding-top:15px;">Message From the User</h3>
    <p style="width:80%; height:auto; background-color:#FFEBCD; padding-left:15px;">${req.body.message}</p>
    `;
    // console.log(req.body);
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false, // true for 465, false for other ports
      port: 25,
      auth: {
 
          user: 'asadiftikhar539@gmail.com', // generated ethereal user
          pass: 'GAFFER423337', // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
  });

  // setup email data with unicode symbols
  let HelperOptions = {
      from: '"Asad" <asadiftikhar539@gmail.com>', // sender address
      to: 'asadiftikhar539@gmail.com', // list of receivers
      subject: 'Gaffer  ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(HelperOptions, (req,res) => {
      // if (error) {
      //     return console.log(error);
      // }
      // console.log('Message sent');
      // Preview only available when sending through an Ethereal account
      res.render(contact);
      // console.log(info);
      

  });
// res.render(con=)

  })
  
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

//Passport config
require('./config/passport')(passport)
//Passport MiddleWare
app.use(passport.initialize());
app.use(passport.session());

//Setting Global Variables
app.get('*',function(req,res,next){
  res.locals.cart=req.session.cart;
  res.locals.user=req.user||null;
  next();
 })

//Set Routes
var pages=require('./routes/pages.js');
var products=require('./routes/products.js');
var cart=require('./routes/cart.js');
var users=require('./routes/users.js');
var adminPages=require('./routes/admin_pages.js');
var adminCategories=require('./routes/admin_categories.js');
var adminProducts=require('./routes/admin_products.js');


app.use('/admin/pages',adminPages);
app.use('/admin/categories',adminCategories);
app.use('/admin/products',adminProducts);
app.use('/products',products); //for Displaying all of the PRODUCTS
app.use('/',pages);
app.use('/cart',cart);
app.use('/users',users);

// var authRoute = require('./routes/auth.js')(app);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});


//Start the server
var port=3000;
app.listen('3000',()=>{
  console.log('server started on port 3000');
});


module.exports=sequelize;