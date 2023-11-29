const express = require("express");
const router = express.Router();
const songsCtrl = require("../controllers/api");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// start from http://localhost:3000/

// GET search page
router.get("/:id/search", ensureLoggedIn, songsCtrl.add);
router.get("/:id/search/results", songsCtrl.search);
// GET search results
router.post("/:id/songs", songsCtrl.addToPlaylist);

module.exports = router;
