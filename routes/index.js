const express = require("express");
const router = express.Router();
const passport = require("passport");
const playlistCtrl = require("../controllers/playlists");

router.get("/", playlistCtrl.index);

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/playlists",
    failureRedirect: "/",
  })
);

router.get("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/");
  });
});

module.exports = router;
