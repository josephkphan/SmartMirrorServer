var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// User Schema
var UserSchema = mongoose.Schema({
    // General Information
    username: String,
    password: String,
    name: String,
    mirrorID: String,

    // Api Keys
    google_distance_matrix_key: String,
    google_geocode_key: String,
    dark_sky_weather_key: String,

    // Facebook and Google Authentication
    facebook: {
        id: String,
        token: String,
        name: String
    },
    google: {
        id: String,
        token: String,
        name: String
    },

    // Mirror Widget Information
    to_do_list: [String],
    stocks: [String],

    maps_origin_street_address: String,
    maps_origin_city_address: String,
    maps_origin_state_address: String,

    maps_destination_street_address: String,
    maps_destination_city_address: String,
    maps_destination_state_address: String,

    maps_settings_avoid_tolls: Boolean,
    maps_settings_mode: String,
    maps_settings_transit_mode: String,

    // Mirror Settings
    color: String,
    fontSize: String

});


var User = module.exports = mongoose.model('User', UserSchema);


// Functions for user data
module.exports.createUser = function (newUser, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            newUser.password = hash;
            newUser.localEnabled = true;
            newUser.save(callback);
        });
    });
}

module.exports.updateUser = function (body) {
    var util = require('util');
    console.log('Body: '+util.inspect(body, false, null));

    var query = {_id: body._id};
    var updates = {};
    var counter = 0;
    var size = Object.keys(body).length;
    console.log('Body Length:' + body.length);
    Object.keys(body).forEach(function (key) {
        counter++;
        console.log(counter);
        if (body[key] !== '') {             //TODO remove console logs
            console.log(key+ ':['+body[key]+']');
            updates[key] = body[key]
        }
        if (counter >= size) {
            User.findOneAndUpdate(query, updates, function (error, doc) {
                console.log('Update: '+util.inspect(body, false, null));
                if (error) {
                    console.log('Update Err: ' + err);
                }
            });
        }
    });


};

module.exports.getUserByUsername = function (username, callback) {
    var query = {username: username};
    User.findOne(query, callback);
};

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if (err) throw err;
        callback(null, isMatch);
    });
};

module.exports.addToDoListItem = function (user, toDoListItem, callback) {
    user.toDo = toDoListItem;
    user.save(callback);
};
