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

    // TODO: Don't get user by username, get user by Mirror ID ... If it doesn't exist, return error "web account not set up yet"

    User.getUserByUsername(req.query.username, function(err, user) {  // TODO: Change to be inside the params key as opposed to the query key
        if(err) throw err;

        // Check if MirrorIDs are the same
        if (req.query.mirrorID === user.mirrorID) {  // TODO: Check to make sure that there is a MirrorID ... Authenticating with FB will skip this step
            res.send(user);
        }
    });
});

/**
 * Update's a user's settings on the web server. Requires an HTTP request with:
 * { username: string, mirrorID: string }
 */
// router.post('/update_user_settings', function(req, res) {
//     // Verify which user this is

//     // TEST
// });


module.exports = router;
