var pg = require('pg');
const express = require('express');
const path = require('path');
var app  = express();
var cors = require('cors');
var http = require('http');
const { time } = require('console');


let r1=0;
let r2=0;
let r3=0;

console.log("random=",r1,r2,r3);


let calot=0;
let ca3=0;
let e1=0;
let e2=0;
let e3=0;
let t1=0;
let t2=0;
let t3=0;
let p1="";
let p2="";
let p3="";


var data={
        carbo:0,
        prot:0,
        fats:0,
        cal:0,
        e1:"",
        e2:"",
        e3:"",
        t1:"",
        t2:"",
        t3:"",
        p1:"",
        p2:"",
        p3:""

};
//cors
app.use(cors({origin: 'http://localhost:8083'}));

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8083/food');

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




var server = app.listen(8083, function() {
    console.log('Ready on port %d', server.address().port);
	
});
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'static')));

var conString = "postgres://wgcdamtr:XhzZYpo5gz6d-m1gsyiUtRMYz6HqyVQ6@jelani.db.elephantsql.com/wgcdamtr"
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  else{
         console.log('connected');
  }
}); 

//app.get('/login',function(req,response){
//re
//})

app.post('/food', function(req, res) {
	

  
  while(r1==r2 || r1==r3 || r2==r3 ){
    r1=Math.round(Math.random() * (107 - 100) + 100);
    r2=Math.round(Math.random() * (107 - 100) + 100);
    r3=Math.round(Math.random() * (107 - 100) + 100);
  }


//console.log(req);
food=req.body.item.foodn;
console.log(food);
{
  client.query(` select * from food where fname='${food}'`, function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    /*if(result=undefined){
      return console.error('No food found');
    }*/
  
    else{
      
      carbo=result.rows[0].carbo;
      prot=result.rows[0].proteins;
      fats=result.rows[0].fats;
      cal=result.rows[0].calories;
       data={
        carbo:carbo,
        prot:prot,
        fats:fats,
        cal:cal,
        e1:"",
        e2:"",
        e3:"",
        t1:"",
        t2:"",
        t3:""
      };
     console.log(carbo);
     calot=calot+cal;
     ca3=(calot/3).toFixed(0);
     console.log(ca3);



     
     //sending to react
     //res.end(JSON.stringify(data));

    }
   
    
    //client.end();
  }); 
 

  
  client.query(` select ename,calb,pic from exercise where eid='${r1}'`, function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    /*if(result=undefined){
      return console.error('No food found');
    }*/
  
    else{
      
      t1=result.rows[0].calb;
      e1=result.rows[0].ename;
      p1=result.rows[0].pic;
      data.p1=p1;
     console.log(e1,t1,p1);
     data.e1=e1;
     
     //sending to react
     //res.end(JSON.stringify(data));

    }
   
    
    //client.end();
  }); 
  
 
  client.query(` select ename,calb,pic from exercise where eid='${r2}'`, function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    /*if(result=undefined){
      return console.error('No food found');
    }*/
  
    else{
      
      t2=result.rows[0].calb;
      e2=result.rows[0].ename;
      p2=result.rows[0].pic;
      data.p2=p2;
     console.log(e2);
     data.e2=e2;
     
     //sending to react
     //res.end(JSON.stringify(data));

    }
   
    
    //client.end();
  }); 
  

  client.query(` select ename,calb,pic from exercise where eid='${r3}'`, function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    /*if(result=undefined){
      return console.error('No food found');
    }*/
  
    else{
      
      t3=result.rows[0].calb;
      e3=result.rows[0].ename;
      p3=result.rows[0].pic;
      data.p3=p3;

     console.log(e3,t3);
     data.e3=e3;
     //sending to react
     //res.end(JSON.stringify(data));
     jt1=(ca3/t1).toFixed(0);
     jt2=(ca3/t2).toFixed(0);
     jt3=(ca3/t3).toFixed(0);
     data.t1=jt1;
     data.t2=jt2;
     data.t3=jt3;
     res.end(JSON.stringify(data));

    }
   
    
    //client.end();
     
  });  

 
 }
});

