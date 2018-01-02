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

    User.getUserByUsername(req.query.username, function(err, user) {
        if(err) throw err;

        // Check if MirrorIDs are the same
        if (req.query.mirrorID === user.mirrorID) {
            res.send(user);
        }
    });
});

module.exports = router;
