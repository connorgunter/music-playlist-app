const express = require("express");
const router = express.Router();
const songsCtrl = require("../controllers/api");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// start from http://localhost:3000/

// GET search page
router.get("/search", ensureLoggedIn, songsCtrl.add);
// GET search results
router.get("/search/add", songsCtrl.search);

module.exports = router;
