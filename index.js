/*
 * Smart Mirror Server
 *
 */

// ------------------------------------- Setup --------------------------------------- //
var express = require('express');
var app = express(); 				                    // Object to represent express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());                             // Initialize the body parser

// Get Models
User = require('./models/user');


// Connect to Mongoose
mongoose.connect('mongodb://localhost/smartmirror');    //pass in the location of our database or the URL
var db = mongoose.connection;

// ----------------------------------Setting Routes --------------------------------- //


// ------------------- Main Routes ------------------//

// Sends back text
app.get('/', function (req, res) {                        // http://localhost:3000
    res.send('Please use/api/users or /api/genre');
});


// Sends back text
app.get('/api', function (req, res) {                     // http://localhost:3000/api
    res.send('Currently on api page');
});


// ------------------- User Routes ------------------//

// Get All Users
app.get('/api/users', function (req, res) {               // http://localhost:3000/api/users
    User.getUsers(function (err, users) {
        if (err) {
            throw err;
        }
        res.json(users);                                  // users is getting passed back from the function
    });
});                                                     //TODO REMOVE THIS ONE AT THE END


//Get A User By ID
app.get('/api/users/:_id', function (req, res) {          // http://localhost:3000/api/users/###IDNUMBER####
    User.getUserById(req.params._id, function (err, user) {
        if (err) {                                          // checks for any errors
            throw err;
        }
        res.json(user);
    });
});


//Add a User
app.post('/api/users/', function (req, res) {
    var user = req.body;
    //NOTE **** GOOD FOR NOW, BUT NOT FOR PRODUCTION. need to disect the data
    // and validate it individually. Need authentication and security measures
    User.addUser(user, function (err, user) {
        if (err) {
            throw err;
        }
        res.json(user);
    });
});


// Update a User
app.put('/api/users/:_id', function (req, res) {
    var id = req.params._id;
    var user = req.body;
    User.updateUser(id, user, {}, function (err, user) {
        if (err) {
            throw err;
        }
        res.json(user);

    });
});


// Delete a User
app.delete('/api/users/:_id', function (req, res) {
    var id = req.params._id;
    User.removeUser(id, function (err, user) {
        if (err) {
            throw err;
        }
        res.json(user);

    });
});


// ---------------------------------- Setting Port ---------------------------------- //

app.listen(3000); // listens on port 3000
console.log('Running on port 3000'); // lets user know server is running