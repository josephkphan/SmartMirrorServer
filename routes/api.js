var express = require('express');
var router = express.Router();
var User = require('../models/user');

// ------------------------- Settings -------------------------
/**
 * Returns a user's settings. Requires an HTTP request with:
 * { username: string, mirrorID: string }
 */
router.get('/get_user_settings', function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    // Double check that correct arguments were passed
    if (!('username' in req.query) || !('mirrorID' in req.query)) {
        console.log("Invalid arguments passed to /get_user_settings request");
        res.send("/get_user_settings Request Failed: Invalid Arguments")
    }

    // TODO: Don't get user by username, get user by Mirror ID ... If it doesn't exist, return error "web account not set up yet"

    User.getUserByUsername(req.query.username, function(err, user) {
        if(err) console.log(err);

        // Check if MirrorIDs are the same
        if (req.query.mirrorID === user.mirrorID) {  // TODO: Check to make sure that there is a MirrorID ... Authenticating with FB will skip this step
            res.send(user);
        }
    });
});

/**
 * Update's a user's settings on the web server. Requires an HTTP request with:
 * Params: { username: string, mirrorID: string }
 * Body: { color: string, fontSize: string }
 */
router.post('/update_user_settings', function(req, res) {
    // Double check that correct arguments were passed
    if (!('username' in req.query) || !('mirrorID' in req.query)) {
        console.log("Invalid arguments passed to /update_user_settings request");
        res.send("/update_user_settings Request Failed: Invalid Arguments")
    }

    // Get username info
    User.getUserByUsername(req.query.username, function(err, user) {
        if(err) console.log(err);

        // Check if MirrorIDs are the same
        if (req.query.mirrorID != user.mirrorID) {
            res.send('INVALID MirrorID or Username');
            return;
        }

        // Read the JSON from req.body
        updates = req.body;

        // Update the schema for this user
        // updates.color
        // updates.fontSize

        res.send('POST Request sent to update user settings');
    });
});


module.exports = router;
