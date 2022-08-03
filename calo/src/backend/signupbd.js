var pg = require('pg');
const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const { appendFile } = require('fs');
var app  = express();
var cors = require('cors')
const corsOptions ={
	origin:'*', 
	credentials:true,            //access-control-allow-credentials:true
	optionSuccessStatus:200,
 }
 
 //cors
app.use(cors({origin: 'http://localhost:8080'}));

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


//or native libpq bindings
//var pg = require('pg').native


var server = app.listen(8089, function() {
    console.log('Ready on port %d', server.address().port);
	
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(cors())
let twt_="";
let wt_="";
let name_="";
let usr_="";
let pass_="";
/*app.get('/home', function(req, res) {
  // If the user is loggedin

    res.send('Welcome back, ');
 
  res.end();
});*/
app.post('/auth', function(req, res) {
	
 

  name_=req.body.fname;
  usr_=req.body.user;
  pass_=req.body.pass;
  wt_=req.body.wt;
  twt_=req.body.tt;

  wt_=parseInt(wt_);
twt_=parseInt(twt_);
console.log(name_,usr_,pass_,wt_,twt_);
var conString = "postgres://wgcdamtr:XhzZYpo5gz6d-m1gsyiUtRMYz6HqyVQ6@jelani.db.elephantsql.com/wgcdamtr" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  else{
         console.log('connected');
  }
  client.query(` insert into logdetails values(DEFAULT,'${name_}','${usr_}','${pass_}','${wt_}','${twt_}') `, function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    else{
    
       
     console.log("successfully inserted");  
     res.redirect('http://localhost:3000/dash');
     
    }
   
    // >> output: 2018-08-23T14:02:57.117Z
    //client.end();
  }); 
 
  
 
}); 
});
