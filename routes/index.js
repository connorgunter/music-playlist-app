const express = require("express");
const router = express.Router();
const passport = require("passport");
const playlistCtrl = require("../controllers/playlists");

// Routes begin at http://localhost:3000

// GET home page - root route
router.get("/", playlistCtrl.index);

// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", {
    // Requesting the user's profile and email
    scope: ["profile", "email"],
  })
);

// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/playlists",
    failureRedirect: "/",
  })
);

// OAuth logout route
router.get("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/");
  });
});

module.exports = router;
