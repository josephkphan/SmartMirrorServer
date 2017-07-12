var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// User Schema
var UserSchema = mongoose.Schema({
    username: String,
    password: String,
    mirrorID: String,
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
    name: String,
    to_do_list: [String],
    stocks: [String],
    maps: {
        origin: {
            city_address: String,
            street_address: String,
            state_address: String
        },
        destination: {
            city_address: String,
            street_address: String,
            state_address: String,
        },
        settings: {
            avoid_tolls: Boolean,
            mode: String,
            transit_mode: String
        }
    },
    color: String,
    fontSize: String,
    google_distance_matrix_key: String,
    google_geocode_key: String,
    dark_sky_weather_key: String
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

module.exports.updateUser = function(_id, update){
    var query = { _id: _id};
    User.findOneAndUpdate(query, {name:'Mumbo Jumbo2'}, function(err, doc){
        console.log('Update Err: ' + err);
    });

}

module.exports.getUserByUsername = function (username, callback) {
    var query = {username: username};
    User.findOne(query, callback);
}

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if (err) throw err;
        callback(null, isMatch);
    });
}

module.exports.addToDoListItem = function (user, toDoListItem, callback) {
    user.toDo = toDoListItem;
    user.save(callback);
}
