var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://jkduvpns:jwIuFosC4Q1aV47IoXQh104kbPIvquRH@jelani.db.elephantsql.com/jkduvpns" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  else{
         console.log('connected');
  }
  client.query("select * from Signin ", function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    else{
      /*Object.keys(result).forEach(function(key) {
        var row = result[key];
        console.log(row.name)
      });*/
      //const result = Object.values(JSON.parse(JSON.stringify(rows)));
      console.log(result.rows[0].usr);
    }
   
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
}); 
module.exports.client=client