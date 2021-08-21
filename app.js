
// PULL DATA from Mongo into the app.js

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://mongo:mongo@ngranback.bmasa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("NLG_DB");

  var general_data = dbo.collection("seinfeld_final_data").find({_id : 'general' }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});



// Select button/form
var J_button = d3.select("#    jerry_button_id");
var G_button = d3.select("#    george_button_id");
var E_button = d3.select("#    elaine_button_id");
var K_button = d3.select("#    kramer_button_id");

// not sure if this is needed     d3.select("#my-form");


// Create event handlers 
J_button.on("click", nameoftheJerryDatafunction);
G_button.on("click", nameoftheGeorgeDatafunction);
E_button.on("click", nameoftheElaineDatafunction);
K_button.on("click", nameoftheKramerDatafunction);

// not sure if this is needed     form.on("submit",runEnter);




function function_to_grab_jerry_data() {
    // Prevent page from refreshing
    d3.event.preventDefault();

// grab the Jerry data
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("NLG_DB");
  
    var jerry_data = dbo.collection("seinfeld_final_data").find({_id : 'jerry' }).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });


        // Assign the data and build the charts from jerry_data and general_data



 
      
}


function function_to_grab_george_data() {
    // Prevent page from refreshing
    d3.event.preventDefault();

        // Grab all the data for George
        // Assign the data to the charts


 
      
}
