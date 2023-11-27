const express = require("express");
const router = express.Router();
const playlistsCtrl = require("../controllers/playlists");

router.get("/playlists/", playlistsCtrl.myIndex);
// Remember: new route always bfore show
router.get("/playlists/new", playlistsCtrl.new);
router.get("/playlists/:id", playlistsCtrl.show);
// 1. GET /playlists/:id/edit
router.get("/playlists/:id/edit", playlistsCtrl.edit);
router.post("/playlists/", playlistsCtrl.create);
router.delete("/playlists/:id", playlistsCtrl.delete);
// 2. PUT /playlists/:id
router.put('/playlists/:id', playlistsCtrl.update)

module.exports = router;
