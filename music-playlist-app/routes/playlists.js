const express = require("express");
const router = express.Router();
const playlistCtrl = require("../controllers/playlists");

// GET /playlists
// router.get('/', playlistCtrl.index)

router.get("/new", playlistCtrl.new);
router.post("/", playlistCtrl.create);
router.get("/:id", playlistCtrl.show);
module.exports = router;
