const express = require("express");
const router = express.Router();
const playlistCtrl = require("../controllers/playlists");

router.get("/", playlistCtrl.myIndex);
// Remember: new route always bfore show
router.get("/new", playlistCtrl.new);
router.get("/:id", playlistCtrl.show);
// 1. GET /playlists/:id/edit
router.get("/:id/edit", playlistCtrl.edit);
router.post("/", playlistCtrl.create);
router.delete("/:id", playlistCtrl.delete);
// 2. PUT /playlists/:id

module.exports = router;
