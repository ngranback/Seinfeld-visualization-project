
// PULL DATA from Mongo into the app.js

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://mongo:mongo@ngranback.bmasa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("NLG_DB");

  var general_data = dbo.collection("seinfeld_final_data").find({'_id' : 'general' }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});


// Select images
var J_button = d3.select("#Jerry");
var G_button = d3.select("#George");
var E_button = d3.select("#Elaine");
var K_button = d3.select("#Kramer");
console.log('selected buttons')



// Create event handlers 
J_button.on("click", Jerry_function);
//G_button.on("click", George_function);
//E_button.on("click", Elaine_function);
//K_button.on("click", Kramer_function);
console.log('set button events')



function Jerry_function() {

    console.log('started jerrys function')

    // Prevent page from refreshing
    d3.event.preventDefault();

// grab the Jerry data
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("NLG_DB");
  
    var jerry_data = dbo.collection("seinfeld_final_data").find({'_id' : 'jerry' }).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
      console.log('got jerrys data')
    });
  });


        // Assign the data and build the charts from jerry_data and general_data



 
      
}


function George_function() {
    // Prevent page from refreshing
    d3.event.preventDefault();

        // Grab all the data for George
        // Assign the data to the charts


 
      
}


function Elaine_function() {
    // Prevent page from refreshing
    d3.event.preventDefault();

        // Grab all the data for George
        // Assign the data to the charts


 
      
}

function Kramer_function() {
    // Prevent page from refreshing
    d3.event.preventDefault();

        // Grab all the data for George
        // Assign the data to the charts


 
      
}