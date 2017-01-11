var mongoose = require('mongoose');

// --------------------------------User Schema-------------------------------- //
var userSchema = mongoose.Schema({
    mirrorID:{
        type: String,
        required: true	// required means they must have this
    },
    password:{
        type: String,
        required: true
    },
    location:{
        type: String
    },
    stocks:{
        type: String,
        required: true
    }
});

// exports out the schema for other files to use
var User = module.exports = mongoose.model('User', userSchema);


// ------------------------------- Functions ---------------------------------- //

// Get All Users
module.exports.getUsers = function(callback,limit){     // what does limit do???
    User.find(callback).limit(limit);
}; //todo Remove this later. Just for testing purposes


// Get One User by ID
module.exports.getUserById = function(id, callback){
    User.findById(id, callback);                        // doesn't need limit because you only return one
};


// Add a User
module.exports.addUser = function(user,callback){
    User.create(user,callback);
};


// Update a User
module.exports.updateUser = function(id,user,options,callback){
    var query = {_id: id};
    var update = {
        mirrorID: user.mirrorID,
        password: user.password,
        location: user.location,
        stocks: user.stocks
    };
    //TODO : This will turn everything blank to NULL. USE SET or another way
    //TODO : to allow user to only update selected fields without losing the rest
    User.findOneAndUpdate(query, update, options, callback);
};


// Delete a User given an ID
module.exports.removeUser = function(id,callback){
    var query = {_id: id};
    User.remove(query,callback);
};




