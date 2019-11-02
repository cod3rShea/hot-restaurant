var express = require("express");
var path = require("path");

var app = express();
var PORT =  process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
        "customerName": "Sean",
        "customerEmail": "sshea@gmail.com",
        "customerID": "sshea89",
        "phoneNumber": "216-555-5555"
    },

];

var waitList = [
    {
        "customerName": "Larry",
        "customerEmail": "larrymcdoug@gmail.com",
        "customerID": "lmcdoug",
        "phoneNumber": "216-555-1111"
    },

];

// index
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// table
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// reservations 
app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});


// Displays all tables
app.get("/api/tables", function(req, res) {
    return res.json(reservations);
});

// Displays all waiting list
app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});
  

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  