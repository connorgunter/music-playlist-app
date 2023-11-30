const express = require("express");
const router = express.Router();
const playlistsCtrl = require("../controllers/playlists");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// Routes begin at http://localhost:3000/playlists

router.get("/", ensureLoggedIn, playlistsCtrl.myIndex);
// Remember: 'new' route always before 'show' route
router.get("/new", ensureLoggedIn, playlistsCtrl.new);
router.get("/sort", playlistsCtrl.index)
router.get("/:id", playlistsCtrl.show);
router.get("/:id/edit", ensureLoggedIn, playlistsCtrl.edit);
router.post("/", playlistsCtrl.create);
router.delete("/:id", ensureLoggedIn, playlistsCtrl.delete);
router.put("/:id", playlistsCtrl.update);

module.exports = router;
