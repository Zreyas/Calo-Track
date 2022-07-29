var pg = require('pg');
const express = require('express');
const path = require('path');
var app  = express();
var cors = require('cors');
var http = require('http');

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
	
//console.log(req);
food=req.body.item.foodn;
console.log(food);
{
  client.query(` select * from food where fname='${food}' `, function(err, result) {
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
      var data={
        carbo:carbo,
        prot:prot,
        fats:fats,
        cal:cal

      };
     console.log(carbo);  
     //sending to react
     res.end(JSON.stringify(data));

    }
   
    
    //client.end();
  }); 
 
  // http.createServer(function(req,res){
  //   res.setHeader('Content-Type', 'application/json');
    
  // }).listen(8086);
  
 
 }
});

