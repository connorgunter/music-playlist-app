const express = require("express");
const router = express.Router();
const playlistCtrl = require("../controllers/playlists");
const playlist = require("../models/playlist");


router.get("/new", playlistCtrl.new);
router.post("/", playlistCtrl.create);
router.get("/:id", playlistCtrl.show);
router.get("/", playlistCtrl.myIndex);
router.delete('/:id',playlistCtrl.delete)
module.exports = router;
