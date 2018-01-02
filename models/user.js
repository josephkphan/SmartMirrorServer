var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// ------------------------- Schema for User Information -------------------------
var UserSchema = mongoose.Schema({
    // General Information
    username: String,
    password: String,
    email: String,
    name: String,
    mirrorID: String,
    about_me: String,

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
    to_do_list: String,
    stocks: String,

    maps_origin_street_address: String,
    maps_origin_city_address: String,
    maps_origin_state_address: String,
    maps_origin_country_address: String,

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


// ------------------------- Functions to Handle User Data -------------------------
module.exports.createUser = function (newUser, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            newUser.password = hash;
            newUser.localEnabled = true;

            //Setting the default values for every user
            newUser.about_me = 'I really love using this mirror every day!!';

            // API Keys
            newUser.google_distance_matrix_key = 'google_distance_matrix_key';
            newUser.google_geocode_key = 'google_geocode_key';
            newUser.dark_sky_weather_key = 'dark_sky_weather_key';

            // Mirror Widget Information
            newUser.to_do_list = '';
            newUser.stocks = '';

            newUser.maps_origin_street_address = 'street';
            newUser.maps_origin_city_address = 'city';
            newUser.maps_origin_state_address = 'state initials';
            newUser.maps_origin_country_address = 'country initials';

            newUser.maps_destination_street_address = 'street';
            newUser.maps_destination_city_address = 'city';
            newUser.maps_destination_state_address = 'state initials';

            newUser.maps_settings_avoid_tolls = false;
            newUser.maps_settings_mode = 'driving'; // driving; walking; bicycling; transit
            newUser.maps_settings_transit_mode = 'bus'; // bus; subway; train; tram; rail
            //TODO Does not currently have avoid=highways - users cannot select local only basically

            newUser.color = 'yellow';
            newUser.fontSize = 'medium';

            newUser.save(callback);
        });
    });
};

module.exports.updateUser = function (body) {
    var util = require('util');
    console.log('Body: ' + util.inspect(body, false, null));

    var query = {_id: body._id};
    var updates = {};
    var counter = 0;
    var size = Object.keys(body).length;
    console.log('Body Length:' + body.length);
    Object.keys(body).forEach(function (key) {
        counter++;
        console.log(counter);
        //If the field in the form is empty, ignore the value UNLESS it is the todolist or stocks
        if (body[key] !== '' || key === 'to_do_list' || key === 'stocks') {             //TODO remove console logs
            console.log(key + ':[' + body[key] + ']');
            updates[key] = body[key]
        }
        if (counter >= size) {
            console.log('Query: ' + util.inspect(query, false, null))
            User.findOneAndUpdate(query, updates, function (error, doc) {
                console.log('Updates: ' + util.inspect(updates, false, null));
                if (error) {
                    console.log('Update Err: ' + err);
                }
            });
        }
    });


};

module.exports.getUserByUsername = function (username, callback) {
    var query = { username: username };
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
