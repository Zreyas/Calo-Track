var pg = require('pg');
var http = require('http');
const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
let alert = require('alert'); 
var cors = require('cors');



const flash = require('connect-flash');

var conString = "postgres://wgcdamtr:XhzZYpo5gz6d-m1gsyiUtRMYz6HqyVQ6@jelani.db.elephantsql.com/wgcdamtr" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  else{
         console.log('connected');
  }
 /* client.query("select * from logdetails ", function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    else{
      Object.keys(result).forEach(function(key) {
        var row = result[key];
        console.log(row.name)
      });
      //const result = Object.values(JSON.parse(JSON.stringify(rows)));
      console.log(result);
    }
   
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  }); */
 
}); 


const app = express();



app.use(cors({ origin: true }));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(flash());
//flash

let name="";
let wt="";
let twt="";


var server = app.listen(8080, function() {
    console.log('Ready on port %d', server.address().port);
	
});
// http://localhost:3000/
app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + "/src/App.js"));
});


app.post('/authsn', function(request, response) {
	// Capture the input fields
	let username = request.body.user;
	let password = request.body.pass;

	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		client.query(`SELECT * FROM logdetails WHERE usr = '${username}' AND pass = '${password}'`,  function(error, results) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			
			if(results.rowCount==0){
				response.send('Incorrect Username and/or Password!');
				
				
				//response.redirect('http://localhost:3000');
				//request.flash('message','Incorrect Username and/or Password!');
			}
			else {
				// Authenticate the user
				
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				
				console.log("success");
				response.redirect('/homelog');

				//for passing to react
				name=results.rows[0].name;
				wt=results.rows[0].cweight;
				twt=results.rows[0].tweight;
				var data={
					name: name,
					wt: wt,
					twt:twt
				};
				http.createServer(function(req,res){
					res.setHeader('Content-Type', 'application/json');
					res.end(JSON.stringify(data));
				}).listen(8081);
				
			} 		
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

// http://localhost:3000/home
app.get('/homelog', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username

		response.redirect('http://localhost:3000/dash');
		//response.send('Welcome back, ' + request.session.username + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});
