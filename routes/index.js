const express = require("express");
const router = express.Router();
const passport = require('passport');
const playlistCtrl = require("../controllers/playlists");

// GET home page - root route
router.get("/", playlistCtrl.index);

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
    // Which passport strategy is being used?
    'google',
    {
      // Requesting the user's profile and email
      scope: ['profile', 'email'],
      // Optionally force pick account every time
      // prompt: "select_account"
    }
  ));

  // Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect: '/playlists',
      failureRedirect: '/'
    }
  ));

  // OAuth logout route
router.get('/logout', function(req, res){
    req.logout(function() {
      res.redirect('/');
    });
  });

module.exports = router;

