const express = require("express");
const router = express.Router();
const passport = require("passport");
const songsCtrl = require("../controllers/api");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// start from http://localhost:3000/

// GET search page
router.get("/search", ensureLoggedIn, songsCtrl.add);
// GET search results
router.get("/search", songsCtrl.search);

module.exports = router;
