var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
        "customerName": "Sean Shea",
        "customerEmail": "sshea@gmail.com",
        "customerID": "sshea89",
        "phoneNumber": "216-555-5555"
    },
    {
        "customerName": "Joey Weedo",
        "customerEmail": "jweedo88@gmail.com",
        "customerID": "jweedo88",
        "phoneNumber": "216-555-4444"
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
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// table
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// reservations 
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});


// Displays all tables
app.get("/api/tables", function (req, res) {
    return res.json(reservations);
});

// Displays all waiting list
app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
});

var reservationsLength = reservations.length;

if (reservationsLength < 6) {
    function test() {
        event.preventDefault();
        alert('test');
        var newCharacter = {
            customerName: jQuery("#person-name").val().trim(),
            customerEmail: jQuery("#phone-number").val().trim(),
            customerID: jQuery("#user-email").val().trim(),
            phoneNumber: jQuery("#customer-id").val().trim()
        };
        jQuery.post("/api/tables", newCharacter).then(function (data) {
                alert("Added reservation");
        });

    }
} else {
    function test() {
        event.preventDefault();
        var newCharacter = {
            customerName: jQuery("#person-name").val().trim(),
            customerEmail: jQuery("#phone-number").val().trim(),
            customerID: jQuery("#user-email").val().trim(),
            phoneNumber: jQuery("#customer-id").val().trim()
        };
        jQuery.post("/api/waitlist", newCharacter).then(function (data) {
                alert("Added to wait list");
        });
    }
}

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
