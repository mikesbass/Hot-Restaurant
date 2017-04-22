// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


var newGuest= [{
  name: "Charles ",
  phoneNumber: "555-5555",
  email: "charles@hotmail.com",
  uniqueID: "1"
}]

var waitlist = [{
  name: "John",
  phoneNumber: "555-5555",
  email: "john@hotmail.com"
  uniqueID: "2"
}]



// Create New Guest, add to new guests - takes in JSON input
app.put("/api/newGuest/:newGuestID", function(req, res) {
  var guestList = newGuest.length;

  if(guestList === 5){
    
    }else{

    }

  var newGuestID = req.params.newGuest;

  newGuest.routeName = newGuest.name.replace(/\s+/g, "").toLowerCase();

  newGuest.push(newGuestID);

  res.json(newGuestID);
     }
});
} 


//*routes for html
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/makeReservation", function(req, res) {
  res.sendFile(path.join(__dirname, "makeReservation.html"));
});

app.get("/viewTable.html", function(req, res) {
  res.sendFile(path.join(__dirname, "viewTable.html"));
});


app.get("/testing", function(req, res) {
  res.redirect("/");
});


// Search for waitlist - provides JSON
app.get("/api/:waitlist", function(req, res) {
  var chosen = req.params.waitlist;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < waitlist.length; i++) {
      if (chosen === waitlist[i]) {
       return res.json(waitlist[i]);
      }
    }
    return res.json(false);
  }
  return res.json(waitlist);
});




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


// Search for tables - provides JSON
app.get("/api/:tables?", function(req, res) {
  var chosen = req.params.tables;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < tables.length; i++) {
      if (chosen === tables[i].routeName) {
       return res.json(tables[i]);
      }
    }
    return res.json(false);
  }
  return res.json(tables);
});