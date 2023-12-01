const express = require("express");
const router = express.Router();
const songsCtrl = require("../controllers/songs");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// Routes begin at http://localhost:3000/playlists

router.get("/:id/search", ensureLoggedIn, songsCtrl.newSongs);
router.get("/:id/search/results", songsCtrl.search);
router.post("/:id/songs/:name/:artist", songsCtrl.addToPlaylist);
router.delete("/:id/songs/:songId", songsCtrl.deleteSong);

module.exports = router;
