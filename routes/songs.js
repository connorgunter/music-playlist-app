const express = require("express");
const router = express.Router();
const songsCtrl = require("../controllers/songs");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// Routes begin at http://localhost:3000/playlists

// GET search page
router.get("/:id/search", ensureLoggedIn, songsCtrl.newSongs);
router.get("/:id/search/results", songsCtrl.search);
// GET search results
router.post("/:id/songs", songsCtrl.addToPlaylist);

module.exports = router;
